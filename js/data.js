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
        summary: `Mi interessa il DevSecOps: creare pipeline di rilascio sicure, automatizzare la scansione delle vulnerabilità nei container e capire come comunicano i sistemi distribuiti a basso livello, tra networking, crittografia e codice in Go, C e Python.`
    },

    // Esperienza professionale
    experiences: [
        {
            role: "Software Developer Intern",
            company: "4 Zeta srl",
            location: "Novara, Italia",
            period: "Marzo 2026 - Giugno 2026",
            overview: "Sviluppo su piattaforma ERP aziendale (PHP/MVC) con integrazioni verso sistemi Enterprise esterni.",
            bullets: [
                "Integrato moduli per pagamenti elettronici ed esportazione dati JSON/XML verso sistemi di terze parti.",
                "Ottimizzato lo script di generazione PDF del core applicativo, riducendo i tempi di elaborazione.",
                "Implementato form autocompilanti con validazione client-side nell'interfaccia ERP."
            ],
            stack: ["PHP", "MVC", "JavaScript", "SQL", "REST APIs", "Webhooks", "Git"]
        }
    ],

    // Competenze tecniche
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
            skills: ["PostgreSQL", "SQLite", "Git & GitHub", "Make", "FastAPI"]
        }
    },

    // Formazione accademica
    education: [
        {
            degree: "Laurea Magistrale in Sicurezza Informatica (LM-66)",
            institution: "Università degli Studi di Milano",
            location: "Milano, Italia",
            period: "2026 - In corso",
            status: "In corso",
            statusBadge: "status-current",
            description: ""
        },
        {
            degree: "Laurea Triennale in Scienze e Tecnologie Informatiche (L-31)",
            institution: "Università degli Studi del Piemonte Orientale",
            location: "Vercelli, Italia",
            period: "2023 - 2026",
            status: "Conseguita",
            statusBadge: "status-completed",
            description: "108/110 — Luglio 2026"
        },
        {
            degree: "Diploma Liceo Scientifico (Scienze Applicate)",
            institution: "IIS Biagio Pascal",
            location: "Romentino (NO), Italia",
            period: "2018 - 2023",
            status: "Conseguito",
            statusBadge: "status-completed",
            description: ""
        }
    ],

    // Competenze linguistiche
    languages: [
        { name: "Italiano",   badge: "Madrelingua" },
        { name: "Marocchino", badge: "Madrelingua" },
        { name: "Inglese",    badge: "Fluente / B2" },
        { name: "Arabo",      badge: "Base / Lavorativo" }
    ],

    // Catalogo completo dei 6 progetti
    projects: [
        {
            id: "connectedgames",
            name: "Connected Games Platform",
            type: "university",
            typeLabel: "Universitario",
            category: "distributed-iot",
            subcategory: "Architettura Edge-Cloud & IoT",
            featured: true,
            year: "2026",
            context: "Laboratorio PISSIR • Università del Piemonte Orientale",
            highlight: "Architettura edge-cloud ibrida offline-first con microservizi Spring Boot, Keycloak e MQTT TLS",
            description: "Piattaforma IoT distribuita per locali fisici con nodi Edge offline-first (Mosquitto TLS, certificati X.509, SQLite WAL) e backend Cloud a microservizi Spring Boot + Gateway. Autenticazione OIDC/PKCE via Keycloak e sincronizzazione bulk resiliente agli stacchi di rete tra Edge e Cloud.",
            technologies: ["Docker Compose", "Spring Boot", "Spring Cloud Gateway", "Keycloak (OIDC/PKCE)", "MQTT over TLS", "PostgreSQL 15"],
            metrics: ["Keycloak OIDC/PKCE multi-tenant con certificati X.509", "Due reti Docker isolate con healthcheck"],
            github: "https://github.com/osama-fth/Connected-Games"
        },
        {
            id: "cicd",
            name: "Simple CI/CD Pipeline",
            type: "personal",
            typeLabel: "Personale",
            category: "devsecops",
            subcategory: "Automazione & Sicurezza CI/CD",
            featured: true,
            year: "2025",
            context: "Progetto Personale",
            highlight: "Pipeline DevSecOps completa con scansione automatica delle immagini via Trivy",
            description: "Pipeline per un'applicazione full-stack containerizzata. Automatizza il linting, esegue test di integrazione all'interno di container Docker e analizza le immagini con Trivy ad ogni commit e pull request su GitHub Actions.",
            technologies: ["Docker Compose", "GitHub Actions", "Trivy", "PostgreSQL", "Node.js", "ESLint"],
            metrics: ["Scansione automatica CVE su pull request", "Test di integrazione containerizzati"],
            github: "https://github.com/osama-fth/Simple-CI-CD"
        },
        {
            id: "loadbalancer",
            name: "Load Balancer con Rate Limiting",
            type: "personal",
            typeLabel: "Personale",
            category: "devsecops",
            subcategory: "Microservizi & Bilanciamento",
            featured: true,
            year: "2025",
            context: "Progetto Personale",
            highlight: "Bilanciamento Least Connections e protezione da sovraccarico",
            description: "Architettura a microservizi orchestrata con Docker Compose. Distribuisce il traffico verso molteplici nodi backend Flask applicando l'algoritmo Least Connections e un limitatore di richieste con burst protetto, validato tramite test di carico paralleli in Bash.",
            technologies: ["Docker Compose", "Flask", "Python", "Bash", "Microservizi", "Load Balancing"],
            metrics: ["Protezione da spike con test di carico paralleli in Bash"],
            github: "https://github.com/osama-fth/LoadBalancer"
        },
        {
            id: "portscanner",
            name: "Port Scanner Concorrente in Go",
            type: "personal",
            typeLabel: "Personale",
            category: "systems",
            subcategory: "Concorrenza & Networking",
            featured: true,
            year: "2025",
            context: "Progetto Personale",
            highlight: "Scansione porte ad alto throughput con goroutine e canali",
            description: "Scanner di porte TCP scritto in Go. Sfrutta il runtime concorrente delle goroutine e un pool di worker per scansionare ampi range di porte contemporaneamente, gestendo timeout ed errori socket senza bloccare il flusso.",
            technologies: ["Go", "Socket TCP/IP", "Goroutine & Canali"],
            metrics: ["Worker pool concorrente con sincronizzazione"],
            github: "https://github.com/osama-fth/PortScanner"
        },
        {
            id: "cryptool",
            name: "CrypTool Lab",
            type: "personal",
            typeLabel: "Personale",
            category: "devsecops",
            subcategory: "Sicurezza & Crittografia",
            featured: false,
            year: "2025",
            context: "Progetto Personale",
            highlight: "Benchmarking AES-256/RSA e simulazione attacchi su cifrari obsoleti, esposto via API FastAPI",
            description: "Ambiente controllato per analizzare algoritmi di cifratura moderni (AES-256, RSA, hashing Bcrypt) e simulare attacchi su cifrari obsoleti (forza bruta, dizionario, tabelle arcobaleno), esponendo metriche via API FastAPI.",
            technologies: ["Python", "FastAPI", "Docker", "OpenAPI", "Crittografia"],
            github: "https://github.com/osama-fth/cryptool"
        },
        {
            id: "aitravelplanner",
            name: "AiTravelPlanner Multi-Agent",
            type: "university",
            typeLabel: "Universitario",
            category: "web-ai",
            subcategory: "Sistemi Multi-Agente & RAG",
            featured: false,
            year: "2026",
            context: "Applicazioni Intelligenti • UPO",
            highlight: "Sistema multi-agente RAG con guardrail di sicurezza",
            description: "Piattaforma per la pianificazione automatizzata di viaggi. Combina ricerca live di dati reali con un sistema RAG su database vettoriale LanceDB (acquisizione PDF ufficiali) e un layer di protezione contro prompt injection e fuga di dati sensibili.",
            technologies: ["Python", "FastAPI", "SvelteKit", "LanceDB", "SQLite", "Groq"],
            github: "https://github.com/osama-fth/UPO-AppIntelligenti-AiTravelPlanner"
        }
    ]
};

export const { profile, experiences, skillsGrouped, education, languages, projects } = portfolioData;
