import { router } from './router.js';

class App {
    constructor() {
        this.initialized = false;
    }

    init() {
        if (this.initialized) {
            console.warn('App already initialized');
            return;
        }

        console.log('🚀 Initializing Portfolio SPA...');

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
            console.log('✅ Portfolio SPA initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing app:', error);
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
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
        });

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
        this.consoleEasterEgg();
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

    consoleEasterEgg() {
        console.log('%c👋 Ciao Developer!', 'font-size: 20px; font-weight: bold; color: #0d6efd;');
        console.log('%cTi piace curiosare nel codice? Ottimo! 🔍', 'font-size: 14px; color: #198754;');
        console.log('%cQuesto portfolio è stato costruito con:', 'font-size: 12px; color: #6c757d;');
        console.log('%c  ✓ Vanilla JavaScript (ES6 Modules)', 'font-size: 11px; color: #0dcaf0;');
        console.log('%c  ✓ Bootstrap 5', 'font-size: 11px; color: #0dcaf0;');
        console.log('%c  ✓ SPA Architecture (no framework!)', 'font-size: 11px; color: #0dcaf0;');
        console.log('%c\nInteressato? Contattami! 📧', 'font-size: 12px; color: #ffc107;');
        console.log('%cGitHub: https://github.com/osama-fth', 'font-size: 11px; color: #6c757d;');
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
