import { renderPortfolioApp } from './views.js';

class Router {
    constructor() {
        this.appContainer = document.getElementById('app');
        this.routeAliases = {
            'home': 'summary',
            'summary': 'summary',
            'sintesi': 'summary',
            'featured': 'featured-projects',
            'featured-projects': 'featured-projects',
            'in-evidenza': 'featured-projects',
            'evidenza': 'featured-projects',
            'experience': 'experience',
            'experiences': 'experience',
            'esperienza': 'experience',
            'esperienze': 'experience',
            'projects': 'all-projects',
            'all-projects': 'all-projects',
            'progetti': 'all-projects',
            'skills': 'skills',
            'competenze': 'skills',
            'education': 'education',
            'formazione': 'education',
            'contacts': 'contact',
            'contact': 'contact',
            'contatti': 'contact',
            'contatto': 'contact'
        };
        this.isScrolling = false;
    }

    init() {
        // Render iniziale
        this.render();

        // Listener per click sui link di navigazione
        this.setupNavigationListeners();

        // Gestione iniziale dell'hash
        this.handleInitialHash();

        // ScrollSpy per evidenziare il link attivo durante lo scrolling
        this.setupScrollSpy();

        // Popstate per pulsanti avanti/indietro del browser
        window.addEventListener('popstate', () => {
            this.handleInitialHash();
        });
    }

    render() {
        if (this.appContainer) {
            this.appContainer.innerHTML = renderPortfolioApp();
        }
    }

    setupNavigationListeners() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                const targetHref = link.getAttribute('href').replace('#', '');
                if (targetHref) {
                    e.preventDefault();
                    this.scrollToSection(targetHref);
                }
            }
        });
    }

    handleInitialHash() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const sectionId = this.routeAliases[hash] || hash;
            // Ritardo lieve per consentire al DOM di essere pronto
            setTimeout(() => {
                this.scrollToSection(sectionId, false);
            }, 80);
        }
    }

    scrollToSection(sectionId, updateHistory = true) {
        const targetId = this.routeAliases[sectionId] || sectionId;
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
            this.isScrolling = true;
            const navHeight = document.getElementById('mainNav')?.offsetHeight || 70;
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (updateHistory) {
                history.pushState(null, '', `#${targetId}`);
            }

            this.updateActiveNavLink(targetId);

            setTimeout(() => {
                this.isScrolling = false;
            }, 600);
        }
    }

    setupScrollSpy() {
        const sections = ['summary', 'featured-projects', 'experience', 'all-projects', 'skills', 'education', 'contact'];
        
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (this.isScrolling) return;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const navHeight = document.getElementById('mainNav')?.offsetHeight || 70;
                const scrollPos = window.scrollY + navHeight + 100;

                for (let i = sections.length - 1; i >= 0; i--) {
                    const el = document.getElementById(sections[i]);
                    if (el && el.offsetTop <= scrollPos) {
                        this.updateActiveNavLink(sections[i]);
                        break;
                    }
                }
            }, 50);
        }, { passive: true });
    }

    updateActiveNavLink(activeId) {
        // Associa le sezioni interne ai 4 link visibili nella navbar
        const primaryTabMap = {
            'summary': '',
            'featured-projects': 'featured-projects',
            'all-projects': 'featured-projects',
            'experience': 'experience',
            'skills': 'skills',
            'education': 'skills',
            'contact': 'contact'
        };
        const targetTab = primaryTabMap[activeId] || activeId;

        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href')?.replace('#', '');
            const mappedId = this.routeAliases[href] || href;
            if (targetTab && mappedId === targetTab) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

export const router = new Router();
