import { profile, education, skills, projects, contacts, languages } from './data.js';

export function renderHome() {
    return `
        <div class="hero-section fade-in">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-10 col-xl-9">
                        <div class="text-center mb-5">
                            <h1 class="hero-title mb-3">${profile.name}</h1>
                            <h2 class="hero-subtitle mb-4">${profile.title}</h2>
                            <p class="lead text-light mb-2" style="max-width: 700px; margin: 0 auto;">${profile.tagline}</p>
                            <p class="text-secondary mb-4" style="max-width: 650px; margin: 0 auto;">${profile.bio}</p>
                            
                            <div class="d-flex justify-content-center align-items-center gap-3 mb-4 flex-wrap">
                                <span class="badge bg-secondary-subtle text-light border border-secondary">
                                    <i class="bi bi-geo-alt"></i> ${profile.location}
                                </span>
                                ${languages.map(lang => `
                                    <span class="badge bg-info-subtle text-light border border-info">
                                        <i class="bi bi-translate"></i> ${lang.name}
                                    </span>
                                `).join('')}
                            </div>
                            
                            <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">
                                <a href="#" data-route="projects" class="btn btn-primary btn-lg">
                                    <i class="bi bi-folder"></i> Esplora Progetti
                                </a>
                                <a href="#" data-route="contacts" class="btn btn-outline-primary btn-lg">
                                    <i class="bi bi-envelope"></i> Contattami
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mt-5 pt-4 align-items-center justify-content-center">
                    <div class="col-md-3 col-6 fade-in-item">
                        <a href="#" data-route="skills" class="text-decoration-none">
                            <div class="card text-center p-4 h-100 stat-card">
                                <i class="bi bi-check-circle-fill text-primary fs-2 mb-2"></i>
                                <h3 class="text-primary mb-2">${skills.acquired.length}</h3>
                                <p class="text-secondary mb-0 small">Skills Acquisite</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-6 fade-in-item">
                        <a href="#" data-route="projects" class="text-decoration-none">
                            <div class="card text-center p-4 h-100 stat-card">
                                <i class="bi bi-folder-fill text-success fs-2 mb-2"></i>
                                <h3 class="text-success mb-2">${projects.length}</h3>
                                <p class="text-secondary mb-0 small">Progetti Totali</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-6 fade-in-item">
                        <a href="#" data-route="skills" class="text-decoration-none">
                            <div class="card text-center p-4 h-100 stat-card">
                                <i class="bi bi-hourglass-split text-warning fs-2 mb-2"></i>
                                <h3 class="text-warning mb-2">${skills.learning.length}</h3>
                                <p class="text-secondary mb-0 small">In Apprendimento</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-6 fade-in-item">
                        <a href="#" data-route="education" class="text-decoration-none">
                            <div class="card text-center p-4 h-100 stat-card">
                                <i class="bi bi-mortarboard-fill text-info fs-2 mb-2"></i>
                                <h3 class="text-info mb-2">${education.length}</h3>
                                <p class="text-secondary mb-0 small">Titoli di Studio</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderEducation() {
    const educationItems = education.map((edu, index) => `
        <div class="col-12 mb-4 fade-in-item">
            <div class="card education-card">
                <div class="card-body p-4">
                    <div class="row align-items-start">
                        <div class="col-md-8 mb-3 mb-md-0">
                            <div class="d-flex align-items-start mb-3">
                                <div class="me-3">
                                    <i class="bi bi-mortarboard-fill text-primary" style="font-size: 2rem;"></i>
                                </div>
                                <div>
                                    <h3 class="text-primary mb-2">${edu.degree}</h3>
                                    <h5 class="text-light mb-2">
                                        <i class="bi bi-building"></i> ${edu.institution}
                                    </h5>
                                    <p class="text-secondary mb-0">
                                        <i class="bi bi-geo-alt"></i> ${edu.location}
                                    </p>
                                </div>
                            </div>
                            <p class="text-secondary mb-3">${edu.description}</p>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="text-md-end mb-3">
                                <span class="badge ${edu.status === 'In corso' ? 'bg-success' : 'bg-secondary'} mb-2">
                                    <i class="bi bi-${edu.status === 'In corso' ? 'play-fill' : 'check-circle-fill'}"></i> ${edu.status}
                                </span>
                                <p class="text-secondary mb-1">
                                    <i class="bi bi-calendar-event"></i> ${edu.period}
                                </p>
                                ${edu.grade ? `<p class="text-warning mb-0 fw-bold"><i class="bi bi-trophy"></i> ${edu.grade}</p>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <hr class="my-3 opacity-25">
                    
                    <div class="highlights">
                        <h6 class="text-info mb-3"><i class="bi bi-stars"></i> Competenze Chiave</h6>
                        <div class="row g-2">
                            ${edu.highlights.map(highlight => `
                                <div class="col-md-6">
                                    <div class="d-flex align-items-start">
                                        <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <span class="text-light">${highlight}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="fade-in">
            <div class="container py-5">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h1 class="display-4 text-primary mb-3">
                            <i class="bi bi-mortarboard"></i> Formazione
                        </h1>
                        <p class="lead text-secondary">Il percorso accademico che mi ha formato</p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        ${educationItems}
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderSkills() {
    const acquiredSkills = skills.acquired.map(skill => `
        <span class="badge bg-success skill-item">
            <i class="bi bi-${skill.icon}"></i> ${skill.name}
        </span>
    `).join('');

    const learningSkills = skills.learning.map(skill => `
        <span class="badge bg-warning text-dark skill-item">
            <i class="bi bi-${skill.icon}"></i> ${skill.name}
        </span>
    `).join('');

    return `
        <div class="fade-in">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <h1 class="text-primary mb-3">
                        <i class="bi bi-gear-fill"></i> Skills
                    </h1>
                    <p class="lead text-secondary">Le mie competenze tecniche</p>
                </div>
                
                <div class="row mb-5">
                    <div class="col-lg-10 mx-auto">
                        <div class="card fade-in-item">
                            <div class="card-header">
                                <h3 class="mb-0 text-success">
                                    <i class="bi bi-check-circle-fill"></i> Competenze Acquisite
                                </h3>
                            </div>
                            <div class="card-body">
                                <div class="skills-container">
                                    ${acquiredSkills}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-lg-10 mx-auto">
                        <div class="card fade-in-item">
                            <div class="card-header">
                                <h3 class="mb-0 text-warning">
                                    <i class="bi bi-hourglass-split"></i> In Apprendimento
                                </h3>
                            </div>
                            <div class="card-body">
                                <div class="skills-container">
                                    ${learningSkills}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderProjects() {
    const universityProjects = projects.filter(p => p.type === 'university');
    const personalProjects = projects.filter(p => p.type === 'personal');

    const renderProjectCard = (project) => `
        <div class="col-lg-6 mb-4 fade-in-item">
            <div class="card project-card h-100">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="mb-0 text-primary">
                        <i class="bi bi-folder-fill"></i> ${project.name}
                    </h4>
                    <span class="badge ${project.type === 'university' ? 'bg-info' : 'bg-danger'}">
                        ${project.type === 'university' ? 'Universitario' : 'Personale'}
                    </span>
                </div>
                <div class="card-body">
                    <p class="text-light mb-3">${project.description}</p>
                    
                    <div class="mb-3">
                        <h6 class="text-secondary mb-2">
                            <i class="bi bi-code-slash"></i> Tecnologie:
                        </h6>
                        <div class="d-flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `
                                <span class="badge bg-secondary">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <h6 class="text-secondary mb-2">
                            <i class="bi bi-list-check"></i> Features:
                        </h6>
                        <ul class="small">
                            ${project.features.map(feature => `
                                <li class="text-light">${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            <span class="badge bg-${project.status === 'Completato' ? 'success' : 'warning'} me-2">
                                ${project.status}
                            </span>
                            <span class="text-secondary small">
                                <i class="bi bi-calendar"></i> ${project.year}
                            </span>
                        </div>
                        <div>
                            ${project.github ? `
                                <a href="${project.github}" target="_blank" class="btn btn-sm btn-outline-light me-1">
                                    <i class="bi bi-github"></i> Code
                                </a>
                            ` : ''}
                            ${project.demo ? `
                                <a href="${project.demo}" target="_blank" class="btn btn-sm btn-primary">
                                    <i class="bi bi-box-arrow-up-right"></i> Demo
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return `
        <div class="fade-in">
            <div class="container py-5">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h1 class="display-4 text-primary mb-3">
                            <i class="bi bi-folder-fill"></i> Progetti
                        </h1>
                        <p class="lead text-secondary mb-4">Una selezione dei miei lavori più significativi</p>
                        <div class="d-flex justify-content-center gap-2 flex-wrap">
                            <span class="badge bg-info px-3 py-2">
                                <i class="bi bi-book"></i> ${universityProjects.length} Universitari
                            </span>
                            <span class="badge bg-danger px-3 py-2">
                                <i class="bi bi-heart"></i> ${personalProjects.length} Personali
                            </span>
                            <span class="badge bg-success px-3 py-2">
                                <i class="bi bi-check-circle"></i> ${projects.filter(p => p.status === 'Completato').length} Completati
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="mb-5">
                    <div class="d-flex align-items-center mb-4">
                        <div class="badge bg-info me-3" style="padding: 0.75rem;">
                            <i class="bi bi-book fs-4"></i>
                        </div>
                        <div>
                            <h2 class="mb-0 text-info">Progetti Universitari</h2>
                            <p class="text-secondary mb-0 small">Lavori sviluppati durante il percorso accademico</p>
                        </div>
                    </div>
                    <div class="row">
                        ${universityProjects.map(renderProjectCard).join('')}
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="d-flex align-items-center mb-4">
                        <div class="badge bg-danger me-3" style="padding: 0.75rem;">
                            <i class="bi bi-heart fs-4"></i>
                        </div>
                        <div>
                            <h2 class="mb-0 text-danger">Progetti Personali</h2>
                            <p class="text-secondary mb-0 small">Esperimenti e side projects per crescita personale</p>
                        </div>
                    </div>
                    <div class="row">
                        ${personalProjects.map(renderProjectCard).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderContacts() {
    return `
        <div class="fade-in">
            <div class="container py-5">
                <div class="row mb-5">
                    <div class="col-lg-8 mx-auto text-center">
                        <h1 class="display-4 text-primary mb-3">
                            <i class="bi bi-chat-dots"></i> Mettiamoci in Contatto
                        </h1>
                        <p class="lead text-secondary mb-4">Interessato a collaborare o semplicemente fare una chiacchierata?</p>
                        <p class="text-light">Sono sempre disponibile per nuove opportunità, progetti interessanti o anche solo per scambiare idee nel mondo tech.</p>
                    </div>
                </div>
                
                <div class="row ">
                    <div class="col-lg-10 mx-auto">
                        <div class="row mb-5 align-items-center justify-content-center">
                            ${contacts.social.map((social, index) => `
                                <div class="col-md-6 fade-in-item">
                                    <a href="${social.url}" target="_blank" class="text-decoration-none">
                                        <div class="card text-center h-100 contact-card p-4">
                                            <div class="card-body">
                                                <i class="bi bi-${social.icon} ${social.color}" style="font-size: 4rem;"></i>
                                                <h4 class="mt-4 mb-2 text-light">${social.platform}</h4>
                                                <p class="text-secondary mb-3">@${social.platform === 'GitHub' ? contacts.github.username : contacts.linkedin.username}</p>
                                                <span class="badge bg-primary-subtle text-primary border border-primary">
                                                    Vai al profilo <i class="bi bi-arrow-right"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
