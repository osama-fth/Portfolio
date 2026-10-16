export const portfolioData = {
    // Profilo personale
    profile: {
        name: "Osama Foutih",
        role: "Aspirante Ingegnere DevSecOps",
        subtitle: "Laureato in Informatica (UPO) • Laureando Magistrale in Sicurezza Informatica (UniMi)",
        location: "Novara, Piemonte, Italia",
        availability: "Disponibile",
        email: "foutihosama@gmail.com",
        github: "https://github.com/osama-fth",
        linkedin: "https://www.linkedin.com/in/osama-foutih",
        portfolioUrl: "https://osama-fth.github.io/Portfolio",
        summary: `Sono un laureato in Informatica all'Università del Piemonte Orientale e studente magistrale in Sicurezza Informatica (LM-66) all'Università degli Studi di Milano. Mi interessa in particolare il DevSecOps: creare pipeline di rilascio sicure, automatizzare la scansione delle vulnerabilità nei container e capire come comunicano i sistemi distribuiti a basso livello, tra networking, crittografia e codice in Go, C e Python.`,
        corePillars: [
            { label: "Container & Orchestrazione", value: "Docker, Docker Compose" },
            { label: "CI/CD & Sicurezza", value: "GitHub Actions, Trivy" },
            { label: "Linguaggi & Sistemi", value: "Python, C, Java 21, PHP, JavaScript, SQL, Go" },
            { label: "Architettura & Reti", value: "Microservizi, Load Balancing, TCP/IP, MQTT" }
        ]
    },

    // Esperienza professionale reale (PDF: 4 Zeta srl)
    experiences: [
        {
            id: 1,
            role: "Software Developer Intern",
            company: "4 Zeta srl",
            location: "Novara, Italia",
            period: "Marzo 2026 - Giugno 2026",
            duration: "4 mesi",
            overview: "Sviluppo e manutenzione sulla piattaforma ERP aziendale (PHP, architettura MVC e database relazionali). Mi sono occupato di integrazioni con sistemi esterni, risoluzione di colli di bottiglia e sviluppo di nuove interfacce.",
            bullets: [
                "Integrazioni esterne: ho sviluppato moduli per la gestione di pagamenti elettronici ed esportazione dati strutturati (JSON/XML) verso sistemi Enterprise di terze parti.",
                "Backend & Prestazioni: debugging del core applicativo e ottimizzazione dello script di generazione PDF, riducendo sensibilmente i tempi di elaborazione e il carico sul server.",
                "Frontend: implementazione di form interattivi autocompilanti con validazione e gestione dello stato client-side.",
                "Workflow di squadra: gestione delle modifiche tramite Git, rispetto delle linee guida interne e code review costanti con gli sviluppatori senior."
            ],
            stack: ["PHP", "MVC", "JavaScript", "SQL", "REST APIs", "Webhooks", "Git"]
        }
    ],

    // Competenze tecniche reali
    skillsGrouped: {
        devSecOps: {
            title: "DevSecOps & Cloud",
            skills: ["Docker", "Docker Compose", "CI/CD Pipelines", "GitHub Actions", "Trivy (Vulnerability Scanner)", "Linux (Bash)"]
        },
        languages: {
            title: "Linguaggi di Programmazione",
            skills: ["Python", "C", "Java 21", "PHP", "JavaScript", "SQL", "Go"]
        },
        networkingAndSecurity: {
            title: "Reti & Sicurezza",
            skills: ["TCP/IP", "Load Balancing & Rate Limiting", "Crittografia (AES, RSA, Bcrypt)", "MQTT & Broker Mosquitto", "REST APIs & Webhooks"]
        },
        databasesAndTools: {
            title: "Database & Strumenti",
            skills: ["PostgreSQL", "SQLite", "Git & GitHub", "Make / Maven", "FastAPI / Express"]
        }
    },

    // Formazione accademica
    education: [
        {
            id: 1,
            degree: "Laurea Magistrale in Sicurezza Informatica (LM-66)",
            institution: "Università degli Studi di Milano",
            location: "Milano, Italia",
            period: "2026 - In corso",
            status: "In corso",
            statusBadge: "status-current",
            description: "Studio avanzato su sicurezza dei sistemi distribuiti, crittografia applicata, sicurezza delle reti e analisi delle vulnerabilità."
        },
        {
            id: 2,
            degree: "Laurea Triennale in Scienze e Tecnologie Informatiche (L-31)",
            institution: "Università degli Studi del Piemonte Orientale",
            location: "Vercelli, Italia",
            period: "2023 - 2026",
            status: "Conseguita",
            statusBadge: "status-completed",
            description: "Solide basi di calcolatori, sistemi operativi, reti, algoritmi e strutture dati, basi di dati relazionali e ingegneria del software."
        },
        {
            id: 3,
            degree: "Diploma Liceo Scientifico (Scienze Applicate)",
            institution: "IIS Biagio Pascal",
            location: "Romentino (NO), Italia",
            period: "2018 - 2023",
            status: "Conseguito",
            statusBadge: "status-completed",
            description: "Indirizzo scientifico con laboratorio informatico quinquennale, programmazione, matematica e fisica."
        }
    ],

    // Competenze linguistiche reali
    languages: [
        { name: "Italiano", level: "Madrelingua", badge: "Madrelingua" },
        { name: "Marocchino", level: "Madrelingua", badge: "Madrelingua" },
        { name: "Inglese", level: "Professionale completo", badge: "Fluente / B2" },
        { name: "Arabo", level: "Lavorativo limitato", badge: "Base / Lavorativo" }
    ],

    // Catalogo completo dei 6 progetti
    projects: [
        {
            id: "connectedgames",
            name: "Connected Games Platform",
            type: "university",
            typeLabel: "Universitario",
            category: "distributed-iot",
            categoryLabel: "IoT & Sistemi Distribuiti",
            subcategory: "Architettura Edge-Cloud & IoT",
            featured: true,
            status: "Completato",
            year: "2026",
            context: "Laboratorio PISSIR • Università del Piemonte Orientale",
            highlight: "Architettura edge-cloud ibrida offline-first con microservizi Spring Boot, Keycloak e MQTT TLS",
            description: "Piattaforma IoT distribuita per la gestione in tempo reale di partite nei locali fisici. Combina nodi Edge indipendenti (Node.js, SQLite WAL e broker Mosquitto con TLS e certificati X.509) con un backend Cloud a microservizi (Spring Boot, Spring Cloud Gateway, PostgreSQL). Include autenticazione centralizzata OIDC SSO con Keycloak (PKCE) e sincronizzazione bulk periodica resiliente agli stacchi di rete.",
            technologies: ["Docker Compose", "Spring Boot", "Spring Cloud Gateway", "Keycloak (OIDC/PKCE)", "MQTT over TLS", "PostgreSQL 15", "Node.js", "SQLite", "OpenAPI 3.0"],
            metrics: ["Architettura edge-cloud offline-first", "Autenticazione SSO OIDC multi-tenant", "Due reti Docker isolate con healthcheck"],
            github: "https://github.com/osama-fth/Connected-Games"
        },
        {
            id: "cicd",
            name: "Simple CI/CD Pipeline",
            type: "personal",
            typeLabel: "Personale",
            category: "devsecops",
            categoryLabel: "DevSecOps & Cloud",
            subcategory: "Automazione & Sicurezza CI/CD",
            featured: true,
            status: "Completato",
            year: "2025",
            context: "Progetto Personale",
            highlight: "Pipeline DevSecOps completa con scansione automatica delle immagini via Trivy",
            description: "Pipeline per un'applicazione full-stack containerizzata. Automatizza il linting, esegue test di integrazione all'interno di container Docker e analizza le immagini con Trivy ad ogni commit e pull request su GitHub Actions.",
            technologies: ["Docker Compose", "GitHub Actions", "Trivy", "PostgreSQL", "Node.js", "ESLint"],
            metrics: ["Scansione automatica CVE su pull request", "Test di integrazione containerizzati", "Build Docker multi-stage"],
            github: "https://github.com/osama-fth/Simple-CI-CD"
        },
        {
            id: "loadbalancer",
            name: "Load Balancer con Rate Limiting",
            type: "personal",
            typeLabel: "Personale",
            category: "devsecops",
            categoryLabel: "DevSecOps & Cloud",
            subcategory: "Microservizi & Bilanciamento",
            featured: true,
            status: "Completato",
            year: "2025",
            context: "Progetto Personale",
            highlight: "Bilanciamento Least Connections e protezione da sovraccarico",
            description: "Architettura a microservizi orchestrata con Docker Compose. Distribuisce il traffico verso molteplici nodi backend Flask applicando l'algoritmo Least Connections e un limitatore di richieste con burst protetto, validato tramite test di carico paralleli in Bash.",
            technologies: ["Docker Compose", "Flask", "Python", "Bash", "Microservizi", "Load Balancing"],
            metrics: ["Algoritmo Least Connections attivo", "Protezione da spike con test di carico paralleli"],
            github: "https://github.com/osama-fth/LoadBalancer"
        },
        {
            id: "portscanner",
            name: "Port Scanner Concorrente in Go",
            type: "personal",
            typeLabel: "Personale",
            category: "systems",
            categoryLabel: "Reti & Sistemi",
            subcategory: "Concorrenza & Networking",
            featured: true,
            status: "Completato",
            year: "2025",
            context: "Progetto Personale",
            highlight: "Scansione porte ad alto throughput con goroutine e canali",
            description: "Scanner di porte TCP scritto in Go. Sfrutta il runtime concorrente delle goroutine e un pool di worker per scansionare ampi range di porte contemporaneamente, gestendo timeout ed errori socket senza bloccare il flusso.",
            technologies: ["Go", "Socket TCP/IP", "Goroutine & Canali", "Networking"],
            metrics: ["Centinaia di porte analizzate in pochi istanti", "Worker pool concorrente con sincronizzazione"],
            github: "https://github.com/osama-fth/PortScanner"
        },
        {
            id: "cryptool",
            name: "CrypTool Lab",
            type: "personal",
            typeLabel: "Personale",
            category: "devsecops",
            categoryLabel: "DevSecOps & Cloud",
            subcategory: "Sicurezza & Crittografia",
            featured: false,
            status: "Completato",
            year: "2025",
            context: "Progetto Personale",
            highlight: "Laboratorio containerizzato per lo studio di algoritmi crittografici",
            description: "Ambiente controllato per analizzare algoritmi di cifratura moderni (AES-256, RSA, hashing Bcrypt) e simulare attacchi su cifrari obsoleti (forza bruta, dizionario, tabelle arcobaleno), esponendo metriche via API FastAPI.",
            technologies: ["Python", "FastAPI", "Docker", "OpenAPI", "Crittografia"],
            metrics: ["Benchmark algoritmi legacy vs moderni", "Documentazione interattiva OpenAPI"],
            github: "https://github.com/osama-fth/cryptool"
        },
        {
            id: "aitravelplanner",
            name: "AiTravelPlanner Multi-Agent",
            type: "university",
            typeLabel: "Universitario",
            category: "web-ai",
            categoryLabel: "Web & AI",
            subcategory: "Sistemi Multi-Agente & RAG",
            featured: false,
            status: "Completato",
            year: "2026",
            context: "Applicazioni Intelligenti • UPO",
            highlight: "Sistema multi-agente RAG con guardrail di sicurezza",
            description: "Piattaforma per la pianificazione automatizzata di viaggi. Combina ricerca live di dati reali con un sistema RAG su database vettoriale LanceDB (acquisizione PDF ufficiali) e un layer di protezione contro prompt injection e fuga di dati sensibili.",
            technologies: ["Python", "FastAPI", "SvelteKit", "LanceDB", "SQLite", "Groq", "Google Gemini"],
            metrics: ["Architettura a più agenti coordinati", "Filtro guardrail per validazione input/output"],
            github: "https://github.com/osama-fth/UPO-AppIntelligenti-AiTravelPlanner"
        }
    ]
};

export const { profile, experiences, skillsGrouped, education, languages, projects } = portfolioData;
