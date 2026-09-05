import { profile, experiences, skillsGrouped, education, languages, projects } from './data.js';

/**
 * Interfaccia pulita, autentica e diretta per recruiter e hiring manager.
 * Include Connected Games Platform e suddivisione chiara tra progetti universitari e personali con relative sottocategorie.
 */
export function renderPortfolioApp() {
    const universityCount = projects.filter(p => p.type === 'university').length;
    const personalCount = projects.filter(p => p.type === 'personal').length;

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

        <!-- Progetti di Punta citati nel CV e Progetti Architetturali di Rilievo -->
        <section id="featured-projects" class="section-padding section-alt">
            <div class="container">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4 gap-2">
                    <div class="section-heading mb-0">
                        <h2 class="section-title">Progetti in evidenza</h2>
                        <p class="section-description">
                            Architetture distribuite, pipeline DevSecOps con scansione CVE e strumenti ad alte prestazioni in Go.
                        </p>
                    </div>
                    <div class="featured-catalog-jump d-none d-md-block">
                        <a href="#all-projects" class="jump-link font-mono">
                            Tutti i 14 progetti <i class="bi bi-arrow-down-short"></i>
                        </a>
                    </div>
                </div>

                <!-- Carosello Orizzontale Bootstrap 5 per i Progetti in Evidenza -->
                <div id="featuredCarousel" class="carousel slide featured-carousel" data-bs-interval="false">
                    <!-- Tab pillole per selezione diretta del progetto -->
                    <div class="carousel-project-tabs" role="tablist" aria-label="Seleziona progetto in evidenza">
                        ${projects.filter(p => p.featured).map((p, idx) => `
                            <button type="button" 
                                class="carousel-tab-btn ${idx === 0 ? 'active' : ''}" 
                                data-bs-target="#featuredCarousel" 
                                data-bs-slide-to="${idx}" 
                                aria-label="Visualizza progetto ${p.name}"
                                aria-current="${idx === 0 ? 'true' : 'false'}">
                                <span class="tab-index font-mono">0${idx + 1}</span>
                                <span class="tab-name">${p.name}</span>
                                <span class="tab-type-tag ${p.type}">${p.type === 'university' ? 'Univ' : 'Pers'}</span>
                            </button>
                        `).join('')}
                    </div>

                    <!-- Slide del Carosello -->
                    <div class="carousel-inner">
                        ${projects.filter(p => p.featured).map((project, idx) => `
                            <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                                ${renderFeaturedProjectItem(project, idx)}
                            </div>
                        `).join('')}
                    </div>

                    <!-- Barra controlli inferiore: contatore e frecce di scorrimento -->
                    <div class="carousel-footer-bar">
                        <div class="carousel-slide-counter font-mono">
                            Progetto <span id="carousel-current-index" class="text-accent fw-bold">01</span> di 0${projects.filter(p => p.featured).length}
                        </div>
                        <div class="carousel-arrow-nav">
                            <button class="carousel-arrow-btn" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev" aria-label="Progetto precedente">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button class="carousel-arrow-btn" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next" aria-label="Progetto successivo">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
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

        <!-- Catalogo Completo dei Progetti con Suddivisione Tipologia e Sottocategorie -->
        <section id="all-projects" class="section-padding section-alt">
            <div class="container">
                <div class="section-heading">
                    <h2 class="section-title">Tutti i progetti</h2>
                    <p class="section-description">
                        L'archivio completo dei progetti sviluppati. Puoi filtrare per tipologia (Universitari / Personali) e per sottocategoria tematica:
                    </p>
                </div>

                <!-- Doppia Barra Filtri: Tipologia e Sottocategorie -->
                <div class="filter-controls-box mb-4">
                    <!-- Riga 1: Filtro Tipologia (Universitari vs Personali) -->
                    <div class="filter-row">
                        <span class="filter-group-label">Tipologia:</span>
                        <div class="filter-group-buttons">
                            <button type="button" class="filter-tab type-filter active" data-type-filter="all">
                                Tutti <span class="filter-count">${projects.length}</span>
                            </button>
                            <button type="button" class="filter-tab type-filter" data-type-filter="university">
                                <i class="bi bi-mortarboard me-1"></i> Universitari <span class="filter-count">${universityCount}</span>
                            </button>
                            <button type="button" class="filter-tab type-filter" data-type-filter="personal">
                                <i class="bi bi-person me-1"></i> Personali <span class="filter-count">${personalCount}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Riga 2: Filtro Sottocategoria -->
                    <div class="filter-row mt-2">
                        <span class="filter-group-label">Area tematica:</span>
                        <div class="filter-group-buttons">
                            <button type="button" class="filter-tab category-filter active" data-category-filter="all">
                                Tutte le aree
                            </button>
                            <button type="button" class="filter-tab category-filter" data-category-filter="devsecops">
                                DevSecOps & Cloud
                            </button>
                            <button type="button" class="filter-tab category-filter" data-category-filter="distributed-iot">
                                IoT & Sistemi Distribuiti
                            </button>
                            <button type="button" class="filter-tab category-filter" data-category-filter="systems">
                                Reti & Sistemi
                            </button>
                            <button type="button" class="filter-tab category-filter" data-category-filter="web-ai">
                                Web & AI
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Contatore di corrispondenze filtrate -->
                <div class="filter-feedback-row mb-3">
                    <span class="filter-status-text" id="filter-status-text">
                        Mostrando tutti i <strong>${projects.length}</strong> progetti
                    </span>
                </div>

                <!-- Griglia progetti -->
                <div class="catalog-grid" id="projects-grid">
                    ${projects.map(project => renderCatalogCard(project)).join('')}
                </div>

                <!-- Azione Carica Altri Progetti se superiori a 6 -->
                <div class="load-more-wrapper" id="load-more-container">
                    <button type="button" class="btn-load-more" id="load-more-btn">
                        <i class="bi bi-plus-lg me-1"></i> Carica altri progetti
                        <span class="load-more-badge" id="load-more-badge">+8</span>
                    </button>
                    <button type="button" class="btn-collapse-less d-none" id="collapse-btn">
                        <i class="bi bi-chevron-up me-1"></i> Mostra meno
                    </button>
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
 * Renderizza un progetto di punta all'interno della slide del carosello
 */
function renderFeaturedProjectItem(project, idx) {
    return `
        <div class="featured-carousel-card">
            <div class="featured-main">
                <div class="featured-header-row">
                    <div class="featured-title-group">
                        <span class="featured-slide-badge font-mono">0${idx + 1}</span>
                        <h3 class="featured-title">${project.name}</h3>
                        <span class="project-year">${project.year}</span>
                    </div>
                    <div class="featured-badge-group">
                        <span class="type-pill ${project.type}">
                            ${project.type === 'university' ? '<i class="bi bi-mortarboard"></i>' : '<i class="bi bi-person"></i>'}
                            ${project.typeLabel}
                        </span>
                        <span class="category-label">${project.subcategory}</span>
                    </div>
                </div>

                ${project.context ? `<div class="featured-context-note">${project.context}</div>` : ''}

                <p class="featured-highlight">${project.highlight}</p>
                <p class="featured-description">${project.description}</p>

                <div class="featured-details">
                    <div class="featured-details-label font-mono">Punti chiave dell'architettura:</div>
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
 * Renderizza una card per il catalogo con etichette chiare di tipologia e sottocategoria
 */
function renderCatalogCard(project) {
    return `
        <div class="catalog-card project-item" data-type="${project.type}" data-category="${project.category}">
            <div class="card-top">
                <div class="card-badges-row">
                    <span class="badge-type ${project.type}">
                        ${project.type === 'university' ? '<i class="bi bi-mortarboard"></i>' : '<i class="bi bi-person"></i>'}
                        ${project.typeLabel}
                    </span>
                    <span class="badge-subcat">${project.subcategory}</span>
                </div>
                <span class="card-year">${project.year}</span>
            </div>

            ${project.context ? `<div class="card-context-line">${project.context}</div>` : ''}
            
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
