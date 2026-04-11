import * as views from './views.js';

class Router {
    constructor() {
        this.routes = {
            'home': views.renderHome,
            'education': views.renderEducation,
            'experiences': views.renderExperiences,
            'skills': views.renderSkills,
            'projects': views.renderProjects,
            'contacts': views.renderContacts
        };

        this.appContainer = document.getElementById('app');
        this.currentRoute = 'home';
    }

    init() {
        this.setupNavigationListeners();
        this.loadRoute('home');
        window.addEventListener('popstate', (e) => {
            const route = e.state?.route || 'home';
            this.loadRoute(route, false);
        });
    }

    setupNavigationListeners() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-route]');
            if (target) {
                e.preventDefault();
                const route = target.getAttribute('data-route');
                this.loadRoute(route);
            }
        });
    }

    loadRoute(routeName, pushState = true) {
        if (!this.routes[routeName]) {
            routeName = 'home';
        }

        if (pushState) {
            window.history.pushState(
                { route: routeName },
                '',
                `#${routeName}`
            );
        }

        this.currentRoute = routeName;
        this.updateActiveNavLink(routeName);
        this.render(routeName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render(routeName) {
        const renderFunction = this.routes[routeName];
        if (!renderFunction) {
            this.appContainer.innerHTML = '<p class="text-danger">Errore: Vista non trovata</p>';
            return;
        }
        const html = renderFunction();
        this.transitionContent(html);
    }

    transitionContent(newHtml) {
        this.appContainer.style.opacity = '0';
        setTimeout(() => {
            this.appContainer.innerHTML = newHtml;
            this.appContainer.style.transition = 'opacity 0.3s ease-in-out';
            this.appContainer.style.opacity = '1';
        }, 150);
    }

    updateActiveNavLink(routeName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`[data-route="${routeName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    navigateTo(routeName) {
        this.loadRoute(routeName);
    }

    getCurrentRoute() {
        return this.currentRoute;
    }
}

export const router = new Router();
