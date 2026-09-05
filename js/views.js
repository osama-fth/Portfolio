import { profile, experiences, skillsGrouped, education, languages, projects } from './data.js';

/**
 * Interfaccia pulita, autentica e diretta per recruiter e hiring manager.
 * Eliminati i cliché da template AI (nessun effetto neon, niente badge ovunque, struttura editoriale solida).
 */
export function renderPortfolioApp() {
    return `
        <!-- Sezione Introduttiva (Hero) -->
        <section id="summary" class="section-hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-status-row">
                        <span class="status-indicator">
                            <span class="status-dot"></span>
                            ${profile.availability}
                        </span>
                        <span class="hero-location">
                            <i class="bi bi-geo-alt"></i> ${profile.location}
                        </span>
                    </div>

                    <h1 class="hero-title">${profile.name}</h1>
                    <p class="hero-subtitle">${profile.role}</p>
                    <p class="hero-academic-note">${profile.subtitle}</p>

                    <div class="hero-bio-container">
                        <p class="hero-bio-text">${profile.summary}</p>
                    </div>

                    <!-- Contatti e azioni immediate per il recruiter -->
                    <div class="hero-actions-row">
                        <a href="mailto:${profile.email}" class="btn-action primary">
                            <i class="bi bi-envelope"></i>
                            <span>${profile.email}</span>
                        </a>
                        <button type="button" class="btn-action secondary" id="copy-email-btn" data-email="${profile.email}">
                            <i class="bi bi-clipboard"></i>
                            <span id="copy-btn-label">Copia Email</span>
                        </button>
                        <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-action ghost">
                            <i class="bi bi-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="btn-action ghost">
                            <i class="bi bi-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <!-- Aree di competenza principali -->
                <div class="focus-areas-grid">
                    ${profile.corePillars.map(pillar => `
                        <div class="focus-card">
                            <div class="focus-title">${pillar.label}</div>
                            <div class="focus-desc">${pillar.value}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Progetti di Punta citati nel CV -->
        <section id="featured-projects" class="section-padding section-alt">
            <div class="container">
                <div class="section-heading">
                    <h2 class="section-title">Progetti in evidenza</h2>
                    <p class="section-description">
                        I progetti principali indicati nel curriculum: pipeline CI/CD con analisi delle vulnerabilità, strumenti di rete concorrenti in Go e architetture a microservizi.
                    </p>
                </div>

                <div class="featured-list">
                    ${projects.filter(p => p.featured).map(project => renderFeaturedProjectItem(project)).join('')}
                </div>
            </div>
        </section>

        <!-- Esperienza Lavorativa -->
        <section id="experience" class="section-padding">
            <div class="container">
                <div class="section-heading">
                    <h2 class="section-title">Esperienza lavorativa</h2>
                    <p class="section-description">
                        Sviluppo software e ottimizzazione di processi su piattaforme aziendali.
                    </p>
                </div>

                <div class="experience-wrapper">
                    ${experiences.map(exp => `
                        <div class="experience-entry">
                            <div class="exp-top-bar">
                                <div>
                                    <h3 class="exp-title">${exp.role}</h3>
                                    <div class="exp-company-line">
                                        <span class="company-name">${exp.company}</span>
                                        <span class="meta-dot">/</span>
                                        <span>${exp.location}</span>
                                    </div>
                                </div>
                                <div class="exp-dates">
                                    <span>${exp.period}</span>
                                    <span class="duration-tag">${exp.duration}</span>
                                </div>
                            </div>

                            <p class="exp-summary">${exp.overview}</p>

                            <ul class="exp-bullets">
                                ${exp.bullets.map(bullet => `
                                    <li>${bullet}</li>
                                `).join('')}
                            </ul>

                            <div class="exp-tech-row">
                                <span class="tech-row-label">Stack:</span>
                                <div class="tech-tags">
                                    ${exp.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Catalogo Completo dei Progetti con Filtri -->
        <section id="all-projects" class="section-padding section-alt">
            <div class="container">
                <div class="section-heading">
                    <h2 class="section-title">Tutti i progetti</h2>
                    <p class="section-description">
                        L'archivio completo dei progetti personali e universitari. Filtra per area tematica:
                    </p>
                </div>

                <!-- Filtri di categoria -->
                <div class="filter-bar">
                    <button type="button" class="filter-tab active" data-filter="all">
                        Tutti <span class="filter-count">${projects.length}</span>
                    </button>
                    <button type="button" class="filter-tab" data-filter="devsecops">
                        DevSecOps & Sicurezza <span class="filter-count">${projects.filter(p => p.category === 'devsecops').length}</span>
                    </button>
                    <button type="button" class="filter-tab" data-filter="systems">
                        Reti & Sistemi <span class="filter-count">${projects.filter(p => p.category === 'systems').length}</span>
                    </button>
                    <button type="button" class="filter-tab" data-filter="fullstack">
                        Web & AI <span class="filter-count">${projects.filter(p => p.category === 'fullstack').length}</span>
                    </button>
                </div>

                <!-- Griglia progetti -->
                <div class="catalog-grid" id="projects-grid">
                    ${projects.map(project => renderCatalogCard(project)).join('')}
                </div>
            </div>
        </section>

        <!-- Competenze Tecniche -->
        <section id="skills" class="section-padding">
            <div class="container">
                <div class="section-heading">
                    <h2 class="section-title">Competenze tecniche</h2>
                    <p class="section-description">
                        Linguaggi, ambienti e strumenti con cui lavoro regolarmente.
                    </p>
                </div>

                <div class="skills-layout">
                    ${Object.entries(skillsGrouped).map(([key, group]) => `
                        <div class="skill-category-block">
                            <h3 class="skill-category-title">${group.title}</h3>
                            <ul class="skill-simple-list">
                                ${group.skills.map(skill => `
                                    <li>${skill}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Formazione e Lingue -->
        <section id="education" class="section-padding section-alt">
            <div class="container">
                <div class="row g-5">
                    <!-- Formazione -->
                    <div class="col-lg-7">
                        <div class="section-heading mb-4">
                            <h2 class="section-title">Percorso formativo</h2>
                        </div>

                        <div class="edu-entries-list">
                            ${education.map(edu => `
                                <div class="edu-entry">
                                    <div class="edu-header">
                                        <h3 class="edu-title">${edu.degree}</h3>
                                        <span class="edu-status ${edu.statusBadge}">${edu.status}</span>
                                    </div>
                                    <div class="edu-meta-line">
                                        <span class="institution-name">${edu.institution}</span>
                                        <span class="meta-dot">/</span>
                                        <span class="edu-years">${edu.period}</span>
                                        <span class="meta-dot">/</span>
                                        <span>${edu.location}</span>
                                    </div>
                                    <p class="edu-desc">${edu.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Lingue e disponibilità -->
                    <div class="col-lg-5">
                        <div class="section-heading mb-4">
                            <h2 class="section-title">Lingue</h2>
                        </div>

                        <div class="lang-card-list">
                            ${languages.map(lang => `
                                <div class="lang-row">
                                    <div>
                                        <span class="lang-title">${lang.name}</span>
                                        <span class="lang-level-sub">${lang.level}</span>
                                    </div>
                                    <span class="lang-badge">${lang.badge}</span>
                                </div>
                            `).join('')}
                        </div>

                        <div class="location-pref-box mt-4">
                            <h4 class="pref-title">Disponibilità lavorativa</h4>
                            <p class="pref-text">
                                Residenza a Novara. Aperto a posizioni in presenza o ibride nelle province di Novara, Milano e Torino, oppure in modalità full remote nel settore DevSecOps, Cloud & Sviluppo Backend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sezione Contatto Diretto -->
        <section id="contact" class="section-padding">
            <div class="container">
                <div class="contact-box">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h2 class="contact-title">Mettiamoci in contatto</h2>
                            <p class="contact-text">
                                Se cerchi una figura junior/entry per posizioni in ambito DevSecOps, automazione CI/CD o sviluppo backend, scrivimi per un colloquio conoscitivo.
                            </p>
                            <div class="contact-info-strip">
                                <span><i class="bi bi-envelope"></i> ${profile.email}</span>
                                <span class="meta-dot">•</span>
                                <span><i class="bi bi-geo-alt"></i> ${profile.location}</span>
                            </div>
                        </div>
                        <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <div class="d-flex flex-column gap-2 align-items-lg-end">
                                <a href="mailto:${profile.email}" class="btn-action primary w-100 w-lg-auto">
                                    <i class="bi bi-send"></i> Invia un'email
                                </a>
                                <button type="button" class="btn-action secondary w-100 w-lg-auto copy-email-secondary" data-email="${profile.email}">
                                    <i class="bi bi-clipboard"></i> Copia ${profile.email}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Feedback toast copia email -->
        <div id="copy-toast" class="toast-popup" aria-live="polite">
            <i class="bi bi-check2"></i>
            <span id="copy-toast-msg">Email copiata negli appunti!</span>
        </div>
    `;
}

/**
 * Renderizza un progetto di punta con layout editoriale
 */
function renderFeaturedProjectItem(project) {
    return `
        <div class="featured-item">
            <div class="featured-main">
                <div class="featured-header-row">
                    <div class="featured-title-group">
                        <h3 class="featured-title">${project.name}</h3>
                        <span class="project-year">${project.year}</span>
                    </div>
                    <span class="category-label">${getCategoryLabel(project.category)}</span>
                </div>

                <p class="featured-highlight">${project.highlight}</p>
                <p class="featured-description">${project.description}</p>

                <div class="featured-details">
                    <ul class="key-points-list">
                        ${project.metrics.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                </div>

                <div class="featured-footer-row">
                    <div class="tech-tags">
                        ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="code-link">
                        <i class="bi bi-github"></i> Codice su GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderizza una card per il catalogo progetti completo
 */
function renderCatalogCard(project) {
    return `
        <div class="catalog-card project-item" data-category="${project.category}">
            <div class="card-top">
                <span class="card-category">${getCategoryLabel(project.category)}</span>
                <span class="card-year">${project.year}</span>
            </div>
            
            <h3 class="card-title">${project.name}</h3>
            <p class="card-highlight">${project.highlight}</p>
            <p class="card-desc">${project.description}</p>

            <div class="card-techs">
                ${project.technologies.slice(0, 4).map(t => `<span class="tech-tag-sm">${t}</span>`).join('')}
                ${project.technologies.length > 4 ? `<span class="tech-tag-sm">+${project.technologies.length - 4}</span>` : ''}
            </div>

            <div class="card-bottom">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="link-github">
                    <i class="bi bi-github"></i> Repository GitHub
                </a>
            </div>
        </div>
    `;
}

function getCategoryLabel(category) {
    switch (category) {
        case 'devsecops': return 'DevSecOps & Sicurezza';
        case 'systems': return 'Reti & Sistemi';
        case 'fullstack': return 'Web & AI';
        default: return 'Software';
    }
}
