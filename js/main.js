import { router } from './router.js';

class App {
    constructor() {
        this.initialized = false;
    }

    init() {
        if (this.initialized) {
            return;
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setup();
            });
        } else {
            this.setup();
        }
    }

    setup() {
        try {
            router.init();
            this.setupGlobalListeners();
            this.handleInitialRoute();
            this.initialized = true;
        } catch (error) {
            this.showError(error);
        }
    }

    handleInitialRoute() {
        const hash = window.location.hash.slice(1);
        if (hash && router.routes[hash]) {
            router.loadRoute(hash, false);
        } else {
            router.loadRoute('home', false);
        }
    }

    setupGlobalListeners() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                }
            });
        });

        this.setupExternalLinks();
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

    showError(error) {
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = `
                <div class="container py-5">
                    <div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">
                            <i class="bi bi-exclamation-triangle"></i> Errore
                        </h4>
                        <p>Si è verificato un errore durante l'inizializzazione dell'applicazione.</p>
                        <hr>
                        <p class="mb-0 small font-monospace">${error.message}</p>
                    </div>
                    <button class="btn btn-primary" onclick="location.reload()">
                        <i class="bi bi-arrow-clockwise"></i> Ricarica la pagina
                    </button>
                </div>
            `;
        }
    }
}

const app = new App();
app.init();

export default app;
