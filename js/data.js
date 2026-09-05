export const portfolioData = {
    // Profilo personale: autentico, umano e diretto
    profile: {
        name: "Osama Foutih",
        role: "Aspirante Ingegnere DevSecOps",
        subtitle: "Laureato in Informatica (UPO) • Laureando Magistrale in Sicurezza Informatica (UniMi)",
        location: "Novara, Piemonte, Italia",
        availability: "Disponibile per opportunità DevSecOps & Cloud/Backend",
        email: "foutihosama@gmail.com",
        github: "https://github.com/osama-fth",
        linkedin: "https://www.linkedin.com/in/osama-foutih",
        portfolioUrl: "https://osama-fth.github.io/Portfolio",
        summary: `Sono un laureato in Informatica all'Università del Piemonte Orientale e studente magistrale in Sicurezza Informatica (LM-66) all'Università degli Studi di Milano. Mi interessa in particolare il DevSecOps: creare pipeline di rilascio sicure, automatizzare la scansione delle vulnerabilità nei container e capire come comunicano i sistemi distribuiti a basso livello, tra networking, crittografia e codice in Go, C e Python.`,
        corePillars: [
            { label: "Container & Orchestrazione", value: "Docker, Docker Compose" },
            { label: "CI/CD & Sicurezza", value: "GitHub Actions, Trivy" },
            { label: "Linguaggi & Sistemi", value: "Go, Python, C, Linux, SQL" },
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

    // Formazione accademica reale
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

    // Competenze linguistiche reali con i livelli del CV
    languages: [
        { name: "Italiano", level: "Madrelingua", badge: "Madrelingua" },
        { name: "Marocchino", level: "Madrelingua", badge: "Madrelingua" },
        { name: "Inglese", level: "Professionale completo", badge: "Fluente / B2" },
        { name: "Arabo", level: "Lavorativo limitato", badge: "Base / Lavorativo" }
    ],

    // Progetti realizzati
    projects: [
        {
            id: "cicd",
            name: "Simple CI/CD Pipeline",
            category: "devsecops",
            featured: true,
            status: "Completato",
            year: "2025",
            highlight: "Pipeline DevSecOps completa con scansione automatica Trivy",
            description: "Pipeline per un'applicazione full-stack containerizzata. Automatizza il linting, esegue test di integrazione all'interno di container Docker e analizza le immagini con Trivy ad ogni commit e pull request su GitHub Actions.",
            technologies: ["Docker Compose", "GitHub Actions", "Trivy", "PostgreSQL", "Node.js", "ESLint"],
            metrics: ["Scansione automatica CVE su pull request", "Test di integrazione containerizzati", "Build Docker multi-stage"],
            github: "https://github.com/osama-fth/Simple-CI-CD"
        },
        {
            id: "portscanner",
            name: "Port Scanner Concorrente in Go",
            category: "systems",
            featured: true,
            status: "Completato",
            year: "2025",
            highlight: "Scansione porte ad alto throughput con goroutine e canali",
            description: "Scanner di porte TCP scritto in Go. Sfrutta il runtime concorrente delle goroutine e un pool di worker per scansionare ampi range di porte contemporaneamente, gestendo timeout ed errori socket senza bloccare il flusso.",
            technologies: ["Go", "Socket TCP/IP", "Goroutine & Canali", "Networking"],
            metrics: ["Centinaia di porte analizzate in pochi istanti", "Worker pool concorrente con sincronizzazione"],
            github: "https://github.com/osama-fth/PortScanner"
        },
        {
            id: "loadbalancer",
            name: "Load Balancer con Rate Limiting",
            category: "devsecops",
            featured: true,
            status: "Completato",
            year: "2025",
            highlight: "Bilanciamento Least Connections e protezione da sovraccarico",
            description: "Architettura a microservizi orchestrata con Docker Compose. Distribuisce il traffico verso molteplici nodi backend Flask applicando l'algoritmo Least Connections e un limitatore di richieste con burst protetto, validato tramite test di carico paralleli in Bash.",
            technologies: ["Docker Compose", "Flask", "Python", "Bash", "Microservizi", "Load Balancing"],
            metrics: ["Algoritmo Least Connections attivo", "Protezione da spike con test di carico paralleli"],
            github: "https://github.com/osama-fth/LoadBalancer"
        },
        {
            id: "cryptool",
            name: "CrypTool Lab",
            category: "devsecops",
            featured: true,
            status: "Completato",
            year: "2025",
            highlight: "Laboratorio containerizzato per lo studio di algoritmi crittografici",
            description: "Ambiente controllato per analizzare algoritmi di cifratura moderni (AES-256, RSA, hashing Bcrypt) e simulare attacchi su cifrari obsoleti (forza bruta, dizionario, tabelle arcobaleno), esponendo metriche via API FastAPI.",
            technologies: ["Python", "FastAPI", "Docker", "OpenAPI", "Crittografia"],
            metrics: ["Benchmark algoritmi legacy vs moderni", "Documentazione interattiva OpenAPI"],
            github: "https://github.com/osama-fth/cryptool"
        },
        {
            id: "aitravelplanner",
            name: "AiTravelPlanner Multi-Agent",
            category: "fullstack",
            featured: false,
            status: "Completato",
            year: "2026",
            highlight: "Sistema multi-agente RAG con guardrail di sicurezza",
            description: "Piattaforma per la pianificazione automatizzata di viaggi. Combina ricerca live di dati reali con un sistema RAG su database vettoriale LanceDB (acquisizione PDF ufficiali) e un layer di protezione contro prompt injection e fuga di dati sensibili.",
            technologies: ["Python", "FastAPI", "SvelteKit", "LanceDB", "SQLite", "Groq", "Google Gemini"],
            metrics: ["Architettura a più agenti coordinati", "Filtro guardrail per validazione input/output"],
            github: "https://github.com/osama-fth/UPO-AppIntelligenti-AiTravelPlanner"
        },
        {
            id: "smarthome",
            name: "SmartHome IoT con MQTT",
            category: "systems",
            featured: false,
            status: "Completato",
            year: "2026",
            highlight: "Architettura publish/subscribe con broker Eclipse Mosquitto",
            description: "Infrastruttura IoT per il monitoraggio domestico. Sensori virtuali inviano telemetria verso il broker MQTT; un controller riceve i dati, aziona le logiche di controllo e persiste gli eventi su PostgreSQL per la visualizzazione in tempo reale su Streamlit.",
            technologies: ["MQTT", "Eclipse Mosquitto", "Python", "Streamlit", "PostgreSQL", "Docker Compose"],
            metrics: ["Comunicazione disaccoppiata pub/sub", "Intero stack containerizzato"],
            github: "https://github.com/osama-fth/SmartHome"
        },
        {
            id: "nutriplan",
            name: "NutriPlan",
            category: "fullstack",
            featured: false,
            status: "Completato",
            year: "2024",
            highlight: "Portale clinico MVC con pattern DAO e generazione PDF",
            description: "Applicazione web per la gestione di piani alimentari e report clinici. Sviluppata secondo il pattern MVC con separazione DAO per il database SQLite, sessioni protette con Bcrypt e generazione server-side di documenti PDF esportabili.",
            technologies: ["Node.js", "Express.js", "SQLite", "EJS", "Bootstrap 5", "Chart.js"],
            metrics: ["Pattern DAO", "Password protette con Bcrypt"],
            github: "https://github.com/osama-fth/UPO-Web-NutriPlan"
        },
        {
            id: "supabaseblog",
            name: "Supabase Blog RBAC",
            category: "fullstack",
            featured: false,
            status: "Completato",
            year: "2026",
            highlight: "Controllo degli accessi basato sui ruoli (RBAC) in Docker",
            description: "Piattaforma blog con autenticazione utente e gestione differenziata dei permessi (lettore, autore, amministratore), configurata per essere avviata in ambiente locale isolato con Docker.",
            technologies: ["Node.js", "Express.js", "Supabase CLI", "PostgreSQL", "Docker"],
            metrics: ["Permessi per ruolo (RBAC)", "Ambiente locale riproducibile"],
            github: "https://github.com/osama-fth/Supabase-Blog"
        },
        {
            id: "networkapp",
            name: "Client-Server TCP a Basso Livello",
            category: "systems",
            featured: false,
            status: "Completato",
            year: "2023",
            highlight: "Comunicazione di rete con socket POSIX in C",
            description: "Progetto pratico per approfondire il funzionamento dei socket a livello di sistema operativo. Implementa connessioni TCP bloccanti, gestione manuale dei buffer di memoria e protocollo di comunicazione client-server.",
            technologies: ["C", "TCP/IP", "Socket POSIX", "Linux"],
            metrics: ["Gestione manuale di buffer e memoria", "Chiamate di sistema POSIX"],
            github: "https://github.com/osama-fth/myFirstNetworkApp"
        },
        {
            id: "upoalglib",
            name: "UPOalglib",
            category: "systems",
            featured: false,
            status: "Completato",
            year: "2024",
            highlight: "Libreria C con strutture dati fondamentali e benchmark",
            description: "Implementazione manuale da zero di strutture dati classiche in C: alberi binari di ricerca (BST), tabelle hash con gestione delle collisioni, algoritmi di ordinamento e routine di profiling per tempi di esecuzione e memoria.",
            technologies: ["C", "Make", "Strutture Dati & Algoritmi"],
            metrics: ["Zero memory leak verificati", "Build system con Makefile"],
            github: "https://github.com/osama-fth/UPO-Algoritmi1-UPOalglib"
        },
        {
            id: "compilatore",
            name: "Compilatore Ac",
            category: "systems",
            featured: false,
            status: "Completato",
            year: "2025",
            highlight: "Lexer, parser ad albero AST e type checking in Java",
            description: "Sviluppo di un compilatore a discesa ricorsiva per un linguaggio formale. Comprende analisi lessicale, costruzione dell'albero sintattico astratto (AST) e analisi semantica con tabella dei simboli.",
            technologies: ["Java 21", "Linguaggi Formali", "JUnit 5"],
            metrics: ["Analisi lessicale e sintattica completa", "Test unitari con JUnit 5"],
            github: "https://github.com/osama-fth/UPO-FLT-Compilatore-Ac-Dc"
        },
        {
            id: "easybook",
            name: "EasyBook",
            category: "fullstack",
            featured: false,
            status: "Completato",
            year: "2025",
            highlight: "Gestionale ad oggetti con modellazione UML e design pattern",
            description: "Progetto di ingegneria del software sviluppato in team: raccolta requisiti, progettazione con diagrammi UML (classi, casi d'uso, sequenza), applicazione dei pattern Singleton, DAO, MVC e interfaccia grafica in JavaFX.",
            technologies: ["Java 21", "JavaFX", "UML", "Design Patterns", "JUnit"],
            metrics: ["Sviluppo cooperativo in team", "Architettura modulare disaccoppiata"],
            github: "https://github.com/osama-fth/UPO-IngSoftware-EasyBook"
        },
        {
            id: "codicefiscale",
            name: "Generatore Codice Fiscale",
            category: "systems",
            featured: false,
            status: "Completato",
            year: "2025",
            highlight: "Calcolo algoritmico ufficiale con parsing dataset catastale",
            description: "Implementazione dell'algoritmo governativo per il calcolo del codice fiscale. Esegue il parsing efficiente dei codici catastali da file CSV compressi e valida l'integrità dei dati tramite controlli formali e unit test.",
            technologies: ["Java", "JUnit 5", "Makefile", "Data Parsing"],
            metrics: ["Validazione accurata dell'input", "Compilazione rapida con Makefile"],
            github: "https://github.com/osama-fth/CodiceFiscale"
        }
    ]
};

export const { profile, experiences, skillsGrouped, education, languages, projects } = portfolioData;
