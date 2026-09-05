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

            // Interazioni per recruiter: filtri progetti e copia email
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
     * Filtro istantaneo per il catalogo progetti
     */
    setupProjectFilters() {
        document.addEventListener('click', (e) => {
            const filterBtn = e.target.closest('.filter-tab, .filter-btn');
            if (!filterBtn) return;

            const category = filterBtn.getAttribute('data-filter');

            // Aggiorna stato attivo dei pulsanti filtro
            document.querySelectorAll('.filter-tab, .filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');

            // Filtra le card
            const projectItems = document.querySelectorAll('.project-item');
            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });
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
