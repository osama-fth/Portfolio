import { router } from './router.js';

class App {
    constructor() {
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        try {
            // Avvio del router e rendering
            router.init();

            // Interazioni per recruiter: carosello progetti, filtri catalogo e copia email
            this.setupFeaturedCarousel();
            this.setupProjectFilters();
            this.setupCopyEmail();
            this.setupMobileMenu();
            this.setupExternalLinks();

            this.initialized = true;
        } catch (error) {
            console.error("Errore durante l'inizializzazione:", error);
        }
    }

    /**
     * Sincronizza il contatore e le tab dei progetti in evidenza con lo scorrimento del carosello
     */
    setupFeaturedCarousel() {
        const carouselEl = document.getElementById('featuredCarousel');
        if (!carouselEl) return;

        carouselEl.addEventListener('slide.bs.carousel', (event) => {
            const nextIdx = event.to;

            // Aggiorna le tab superiori
            const tabBtns = carouselEl.querySelectorAll('.carousel-tab-btn');
            tabBtns.forEach((btn, idx) => {
                const isActive = (idx === nextIdx);
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-current', isActive ? 'true' : 'false');
            });

            // Aggiorna l'indicatore numerico corrente
            const currentCounter = document.getElementById('carousel-current-index');
            if (currentCounter) {
                currentCounter.textContent = `0${nextIdx + 1}`;
            }
        });
    }

    /**
     * Filtro istantaneo per il catalogo progetti con paginazione "Carica altri" (soglia 6 progetti)
     */
    setupProjectFilters() {
        const INITIAL_LIMIT = 6;
        let currentLimit = INITIAL_LIMIT;
        let activeType = 'all';
        let activeCategory = 'all';

        const applyFilters = () => {
            const projectItems = document.querySelectorAll('.project-item');
            const matchedItems = [];

            // 1. Identifica tutti i progetti che soddisfano i filtri attivi
            projectItems.forEach(item => {
                const itemType = item.getAttribute('data-type');
                const itemCat = item.getAttribute('data-category');

                const matchesType = (activeType === 'all' || itemType === activeType);
                const matchesCat = (activeCategory === 'all' || itemCat === activeCategory);

                if (matchesType && matchesCat) {
                    matchedItems.push(item);
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });

            const totalMatched = matchedItems.length;

            // 2. Mostra solo i progetti fino a currentLimit
            matchedItems.forEach((item, index) => {
                if (index < currentLimit) {
                    item.style.display = 'flex';
                    item.style.opacity = '1';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });

            const visibleCount = Math.min(totalMatched, currentLimit);

            // 3. Aggiorna testo di stato per il recruiter
            const statusEl = document.getElementById('filter-status-text');
            if (statusEl) {
                let typeLabel = 'tutti i';
                if (activeType === 'university') typeLabel = 'universitari';
                if (activeType === 'personal') typeLabel = 'personali';

                if (totalMatched > visibleCount) {
                    statusEl.innerHTML = `Mostrando <strong>${visibleCount}</strong> di <strong>${totalMatched}</strong> progetti (${typeLabel})`;
                } else {
                    statusEl.innerHTML = `Mostrando tutti i <strong>${totalMatched}</strong> progetti (${typeLabel})`;
                }
            }

            // 4. Gestione dinamica del pulsante "Carica altri" e "Mostra meno"
            const loadMoreContainer = document.getElementById('load-more-container');
            const loadMoreBtn = document.getElementById('load-more-btn');
            const loadMoreBadge = document.getElementById('load-more-badge');
            const collapseBtn = document.getElementById('collapse-btn');

            if (loadMoreContainer && loadMoreBtn && collapseBtn) {
                const remaining = totalMatched - visibleCount;

                if (remaining > 0) {
                    loadMoreContainer.style.display = 'flex';
                    loadMoreBtn.classList.remove('d-none');
                    if (loadMoreBadge) {
                        loadMoreBadge.textContent = `+${remaining}`;
                    }
                    collapseBtn.classList.add('d-none');
                } else {
                    loadMoreBtn.classList.add('d-none');
                    // Se ci sono più di 6 progetti e sono tutti espansi, offri il comando per richiudere
                    if (totalMatched > INITIAL_LIMIT && currentLimit > INITIAL_LIMIT) {
                        collapseBtn.classList.remove('d-none');
                        loadMoreContainer.style.display = 'flex';
                    } else {
                        collapseBtn.classList.add('d-none');
                        loadMoreContainer.style.display = 'none';
                    }
                }
            }
        };

        // Esecuzione iniziale al caricamento per applicare la soglia di 6
        applyFilters();

        document.addEventListener('click', (e) => {
            // Click su filtro tipologia (Universitari / Personali / Tutti)
            const typeBtn = e.target.closest('.type-filter');
            if (typeBtn) {
                activeType = typeBtn.getAttribute('data-type-filter') || 'all';
                document.querySelectorAll('.type-filter').forEach(btn => btn.classList.remove('active'));
                typeBtn.classList.add('active');
                currentLimit = INITIAL_LIMIT; // Reset della soglia al cambio filtro
                applyFilters();
                return;
            }

            // Click su filtro sottocategoria tematica
            const catBtn = e.target.closest('.category-filter');
            if (catBtn) {
                activeCategory = catBtn.getAttribute('data-category-filter') || 'all';
                document.querySelectorAll('.category-filter').forEach(btn => btn.classList.remove('active'));
                catBtn.classList.add('active');
                currentLimit = INITIAL_LIMIT; // Reset della soglia al cambio filtro
                applyFilters();
                return;
            }

            // Click su "Carica altri progetti"
            const loadBtn = e.target.closest('#load-more-btn');
            if (loadBtn) {
                currentLimit += 6;
                applyFilters();
                return;
            }

            // Click su "Mostra meno"
            const colBtn = e.target.closest('#collapse-btn');
            if (colBtn) {
                currentLimit = INITIAL_LIMIT;
                applyFilters();
                const catalogEl = document.getElementById('all-projects');
                if (catalogEl) {
                    catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                return;
            }
        });
    }

    /**
     * Copia rapida dell'email negli appunti con feedback visivo immediato
     */
    setupCopyEmail() {
        document.addEventListener('click', async (e) => {
            const copyBtn = e.target.closest('#copy-email-btn, .copy-email-secondary');
            if (!copyBtn) return;

            const email = copyBtn.getAttribute('data-email') || 'foutihosama@gmail.com';

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(email);
                } else {
                    // Fallback per ambienti non HTTPS o vecchi browser
                    const textarea = document.createElement('textarea');
                    textarea.value = email;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                }

                // Mostra toast di successo
                this.showToast(`Email ${email} copiata negli appunti!`);

                // Feedback visivo sul pulsante principale
                const label = document.getElementById('copy-btn-label');
                if (label) {
                    const originalText = label.textContent;
                    label.textContent = "Copiata!";
                    setTimeout(() => {
                        label.textContent = originalText;
                    }, 2200);
                }
            } catch (err) {
                console.error("Impossibile copiare l'email:", err);
                this.showToast(`Seleziona l'email: ${email}`);
            }
        });
    }

    showToast(message) {
        const toast = document.getElementById('copy-toast');
        const toastMsg = document.getElementById('copy-toast-msg');
        if (!toast || !toastMsg) return;

        toastMsg.textContent = message;
        toast.classList.add('show');

        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    }

    setupMobileMenu() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    if (window.bootstrap && bootstrap.Collapse) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    setupExternalLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="http"]');
            if (link && !link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
}

const app = new App();
app.init();

export default app;
