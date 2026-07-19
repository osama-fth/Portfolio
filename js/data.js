export const portfolioData = {
    // Profilo personale
    profile: {
        name: "Foutih Osama",
        title: "Studente di Informatica | Orientato al DevSecOps",
        tagline: "Pipeline automatizzate, container e sicurezza applicativa.",
        bio: `Studente di Informatica presso l'Università del Piemonte Orientale, in fase di orientamento verso il mondo DevSecOps.
        Mi occupo di costruire pipeline di sviluppo sicure e automatizzate: dalla containerizzazione con Docker alla scansione delle vulnerabilità in CI/CD, fino ai principi di networking e crittografia che stanno alla base della sicurezza dei sistemi.`,
        location: "Piemonte, Italia",
    },

    // Formazione accademica
    education: [
        {
            id: 1,
            degree: "Laurea Triennale in Informatica (L-31)",
            institution: "Università del Piemonte Orientale",
            location: "Vercelli, Italia",
            period: "2023 - In Corso",
            description: "Percorso accademico che combina solide basi teoriche con competenze pratiche nello sviluppo software. Il piano di studi approfondisce l'intero stack tecnologico, dall'architettura hardware alla progettazione di applicazioni web e mobili.",
            highlights: [
                "Architettura degli Elaboratori e Sistemi Operativi",
                "Algoritmi, Strutture Dati e Complessità",
                "Basi di Dati e Sistemi Informativi",
                "Sviluppo Web e Metodologie di Programmazione",
                "Reti di Calcolatori e Sicurezza"
            ]
        },
        {
            id: 2,
            degree: "Diploma Liceo Scientifico - Opzione Scienze Applicate",
            institution: "IIS Biagio Pascal",
            location: "Romentino, Italia",
            period: "2018 - 2023",
            description: "Indirizzo scientifico focalizzato sulle discipline STEM che integra lo studio tradizionale con un forte approccio laboratoriale e l'informatica curricolare al posto del latino.",
            highlights: [
                "Analisi Matematica e Fisica",
                "Informatica e Logica Computazionale",
                "Scienze Naturali (Chimica, Biologia, Scienze della Terra)",
                "Modellizzazione e Analisi dei Dati"
            ]
        }
    ],

    // Esperienze
    experiences: [
        {
            id: 1,
            role: "Software Developer Intern",
            company: "4 Zeta Srl",
            location: "Novara, Italia",
            period: "Marzo 2026 - Giugno 2026",
            description: "Contributo allo sviluppo e alla manutenzione di una piattaforma ERP aziendale basata su architettura PHP MVC, database relazionali e integrazioni REST API / Webhooks.",
            highlights: [
                "Integrazioni: Sviluppo di moduli per la gestione di pagamenti elettronici ed esportazione dati strutturati (JSON/XML) verso sistemi Enterprise esterni.",
                "Backend: Debugging del software core e ottimizzazione dello script di generazione PDF per la riduzione dei tempi di elaborazione e del carico server.",
                "Frontend: Implementazione di interfacce utente dinamiche, form auto-compilanti con gestione dello stato e routing client-side tramite parametri URL.",
                "Workflow: Gestione del codice tramite Git, partecipazione attiva a code review interne e allineamento con le specifiche tecniche del team di sviluppo."
            ]
        }
    ],

    // Competenze tecniche
    skills: {
        acquired: [
            // Linguaggi Core
            { name: "C", category: "language", icon: "c-circle" },
            { name: "Java", category: "language", icon: "filetype-java" },
            { name: "Python", category: "language", icon: "filetype-py" },
            { name: "JavaScript", category: "language", icon: "filetype-js" },

            // Web & Data
            { name: "HTML/CSS", category: "frontend", icon: "file-code" },
            { name: "SQL", category: "database", icon: "database" },
            { name: "REST APIs", category: "backend", icon: "hdd-network" },

            // Tools & Systems
            { name: "Git", category: "tool", icon: "git" },
            { name: "Linux", category: "system", icon: "terminal" },
            { name: "Docker", category: "devops", icon: "box-seam" }
        ],
        learning: [
            // Backend Avanzato
            { name: "Go", category: "language", icon: "code-slash" },
            { name: "MongoDB", category: "database", icon: "server" },
            { name: "Redis", category: "database", icon: "hdd-stack" },

            // Security & DevOps
            { name: "DevSecOps", category: "practice", icon: "shield-check" },
            { name: "CI/CD Pipelines", category: "devops", icon: "arrow-repeat" },
            { name: "Network Security", category: "security", icon: "router" },
            { name: "Cloud Basics", category: "cloud", icon: "cloud" },
            { name: "Ai Basics", category: "ai", icon: "robot" }
        ]
    },

    // Progetti
    projects: [
        // ==========================
        // PROGETTI UNIVERSITARI
        // ==========================
        {
            id: 1,
            name: "NutriPlan",
            type: "university",
            status: "Completato",
            description: "Piattaforma full-stack per la telegestione nutrizionale basata su architettura MVC. Implementa il pattern DAO per l'astrazione dei dati, rendering server-side dinamico e generazione automatizzata di reportistica clinica.",
            technologies: ["Node.js", "Express.js", "SQLite", "EJS", "Bootstrap 5", "Chart.js"],
            features: [
                "Autenticazione tramite sessione e sicurezza con Bcrypt",
                "Visualizzazione dei dati e analisi",
                "Implementazione del pattern DAO",
                "Generazione dinamica di PDF"
            ],
            github: "https://github.com/osama-fth/UPO-Web-NutriPlan",
            year: "2024"
        },
        {
            id: 2,
            name: "Bacheca Annunci",
            type: "university",
            status: "Completato",
            description: "Applicazione desktop modulare progettata sui principi OOP. Implementa rigorosamente il pattern MVC per disaccoppiare la logica di business dalle interfacce, permettendo il supporto simultaneo di GUI e CLI sullo stesso core applicativo.",
            technologies: ["Java 21", "Swing", "JUnit 5"],
            features: [
                "Implementazione architetturale MVC",
                "Interfaccia polimorfica (Swing e CLI)",
                "Testing unitario automatizzato",
                "Persistenza dati personalizzata"
            ],
            github: "https://github.com/osama-fth/UPO-Java-Bacheca-Annunci",
            year: "2024"
        },
        {
            id: 3,
            name: "Grafi",
            type: "university",
            status: "Completato",
            description: "Libreria Java per la modellazione e manipolazione di grafi (pesati e non) basata su Matrice di Incidenza. Include l'implementazione di algoritmi di attraversamento e analisi topologica, con gestione automatizzata delle dipendenze e testing unitario.",
            technologies: ["Java 21", "Maven", "JUnit 5"],
            features: [
                "Struttura a matrice di incidenza",
                "Attraversamento del grafo (BFS e DFS)",
                "Rilevamento cicli e connettività",
                "Gestione delle dipendenze con Maven"
            ],
            github: "https://github.com/osama-fth/UPO-Algoritmi2-Grafi",
            year: "2024"
        },
        {
            id: 4,
            name: "UPOalglib",
            type: "university",
            status: "Completato",
            description: "Libreria C low-level che implementa da zero le fondamenta dell'informatica. Include strutture dati complesse (BST, Hash Tables con collision handling), algoritmi di ordinamento e utility per il profiling delle performance.",
            technologies: ["C", "Make"],
            features: [
                "Strutture dati personalizzate (BST, Hash Table)",
                "Ottimizzazione degli algoritmi di ordinamento",
                "Valutazione di espressioni basata su stack",
                "Benchmark delle prestazioni"
            ],
            github: "https://github.com/osama-fth/UPO-Algoritmi1-UPOalglib",
            year: "2024"
        },
        {
            id: 5,
            name: "MyFirstNetworkApp",
            type: "university",
            status: "Completato",
            description: "Esempio essenziale di comunicazione Client-Server in C. Gestisce manualmente la connessione TCP/IP e lo scambio di messaggi utilizzando le librerie di rete standard di sistema (Socket API).",
            technologies: ["C", "TCP/IP"],
            features: [
                "Architettura client-server",
                "Programmazione socket a basso livello",
                "Operazioni di I/O bloccanti",
                "Gestione dei buffer"
            ],
            github: "https://github.com/osama-fth/myFirstNetworkApp",
            year: "2023"
        },
        {
            id: 6,
            name: "Compilatore Ac",
            type: "university",
            status: "Completato",
            description: "Sviluppo di un semplice compilatore a discesa ricorsiva per un linguaggio proprietario. Realizzato manualmente in Java per approfondire le dinamiche di parsing di una grammatica definita ad hoc.",
            technologies: ["Java 21", "JUnit 5"],
            features: [
                "Analisi Lessicale con gestione dei token e delle espressioni regolari",
                "Parser a discesa ricorsiva per la costruzione dell'AST",
                "Analisi Semantica e Type Checking tramite Symbol Table",
            ],
            "github": "https://github.com/osama-fth/UPO-FLT-Compilatore-Ac-Dc",
            "year": "2025"
        },
        {
            id: 7,
            name: "EasyBook",
            type: "university",
            status: "Completato",
            description: "Progetto di gruppo per la progettazione e sviluppo di un sistema software complesso seguendo il ciclo di vita del software.",
            technologies: ["Java 21", "Javafx", "Junit", "UML", "Design Patterns"],
            features: [
                "Ingegneria dei Requisiti e Modellazione UML (Casi d'uso, Classi, Sequenza)",
                "Applicazione di Design Patterns (es. Singleton, DAO, MVC, POJO)",
                "Interfaccia utente reattiva sviluppata in JavaFX con architettura FXML",
            ],
            github: "https://github.com/osama-fth/UPO-IngSoftware-EasyBook",
            year: "2025"
        },
        {
            "id": 8,
            "name": "AiTravelPlanner",
            "type": "university",
            "status": "Completato",
            "description": "Sistema multi-agente avanzato per la pianificazione di viaggi end-to-end. Unisce la ricerca live di dati reali (voli, hotel, meteo) a un robusto sistema RAG basato su documenti ministeriali ufficiali per un'esperienza sicura e affidabile.",
            "technologies": [
                "Python",
                "Agno Framework",
                "FastAPI",
                "SvelteKit",
                "LanceDB",
                "SQLite",
                "Groq",
                "Google Gemini"
            ],
            "features": [
                "Architettura Multi-Agente orchestrata",
                "Sistema RAG con database vettoriale serverless LanceDB e pipeline di ingestion per PDF",
                "Protezione del sistema tramite Guardrails per prevenire fughe di dati PII e Prompt Injection in multilingua",
                "Ricerca live integrata per voli (CLI custom), hotel (DuckDuckGo) e meteo (Open-Meteo dinamico API forecast/climate)"
            ],
            "github": "https://github.com/osama-fth/UPO-AppIntelligenti-AiTravelPlanner",
            "year": "2026"
        },
        // ==========================
        // PROGETTI PERSONALI
        // ==========================
        {
            id: 9,
            name: "Simple CI/CD",
            type: "personal",
            status: "Completato",
            description: "Pipeline DevSecOps completa applicata a un gestionale bibliotecario full-stack. Integra scansione vulnerabilità, linting automatizzato e test di integrazione in container, orchestrando tutto tramite GitHub Actions.",
            technologies: ["Docker Compose", "GitHub Actions", "Trivy", "PostgreSQL", "Node.js", "ESLint"],
            features: [
                "Architettura a microservizi containerizzata",
                "Scansione di sicurezza automatizzata (Trivy)",
                "Test di integrazione nella pipeline CI",
                "Controlli di qualità del codice"
            ],
            github: "https://github.com/osama-fth/Simple-CI-CD",
            year: "2025"
        },
        {
            id: 10,
            name: "CrypTool",
            type: "personal",
            status: "Completato",
            description: "Laboratorio interattivo containerizzato per l'analisi di algoritmi crittografici. Permette di eseguire simulazioni di attacchi (Brute Force, Dictionary, Rainbow Table) in ambiente controllato per dimostrare le vulnerabilità dei cifrari legacy rispetto agli standard moderni.",
            technologies: ["Python", "FastAPI", "Docker", "OpenAPI"],
            features: [
                "Simulazione di vulnerabilità (brute force)",
                "Implementazione di standard moderni (AES-256, RSA)",
                "Hash sicuri delle password (Bcrypt)",
                "Documentazione API interattiva"
            ],
            github: "https://github.com/osama-fth/cryptool",
            year: "2025"
        },
        {
            id: 11,
            name: "Generatore Codice Fiscale",
            type: "personal",
            status: "Completato",
            description: "Implementazione rigorosa dell'algoritmo governativo per il calcolo del Codice Fiscale. Il software gestisce il parsing efficiente di dataset CSV (codici catastali) integrati nel JAR e garantisce l'integrità dei dati tramite validazione input e Unit Testing.",
            technologies: ["Java", "JUnit 5", "Makefile", "CSV Parsing"],
            features: [
                "Gestione delle risorse e stream",
                "Testing unitario automatizzato",
                "Sistema di build personalizzato (Makefile)"
            ],
            github: "https://github.com/osama-fth/CodiceFiscale",
            year: "2025"
        },
        {
            id: 12,
            name: "Go Port Scanner",
            type: "personal",
            status: "Completato",
            description: "Scanner di porte di rete ad alte prestazioni scritto in Go. Utilizza le goroutines per scansioni concorrenti ultra-veloci.",
            technologies: ["Go", "Networking", "Concurrency"],
            features: ["Scansione concorrente", "TCP Connect", "Analisi range IP"],
            github: "https://github.com/osama-fth/PortScanner",
            year: "2025"
        },
        {
            id: 13,
            name: "LoadBalancer con Rate Limiting",
            type: "personal",
            status: "Completato",
            description: "Sistema di load balancing con rate limiting implementato usando Nginx, Docker e Flask. Dimostra come distribuire il carico tra più server backend utilizzando l'algoritmo Least Connections e come proteggere il sistema con un rate limiter da overload.",
            technologies: ["Nginx", "Docker", "Flask", "Python", "Bash"],
            features: [
                "Load Balancing con algoritmo Least Connections",
                "Rate Limiting (1 richiesta/secondo + burst di 10)",
                "Testing automatico con script bash paralleli",
                "Architettura a microservizi containerizzata",
                "Monitoring e logging delle richieste"
            ],
            github: "https://github.com/osama-fth/LoadBalancer",
            year: "2025"
        },
        {
            id: 14,
            name: "SmartHome",
            type: "personal",
            status: "Completato",
            description: "Sistema IoT per il monitoraggio domestico basato sul protocollo MQTT. Sensori simulati pubblicano dati su topic MQTT verso un broker Eclipse Mosquitto; un controller sottoscrive i topic, applica logica di controllo sugli attuatori e persiste i dati su PostgreSQL. Una dashboard Streamlit interroga il DB in tempo reale. L'intera infrastruttura è orchestrata con Docker Compose.",
            technologies: ["MQTT", "Mosquitto", "Python", "Streamlit", "PostgreSQL", "Docker Compose"],
            features: [
                "Comunicazione publish/subscribe MQTT",
                "Sensori simulati: temperatura e movimento",
                "Controller MQTT: controllo termostato e gestione luci",
                "Persistenza degli eventi su PostgreSQL e dashboard Streamlit",
            ],
            github: "https://github.com/osama-fth/SmartHome",
            year: "2026"
        },
        {
            id: 15,
            name: "Supabase Blog",
            type: "personal",
            status: "Completato",
            description: "Blog/CMS minimale con post, commenti e gestione ruoli (admin, author, reader). Utilizza Supabase per l'autenticazione e il database, ed è strutturato per essere avviato in ambiente locale tramite Docker e Supabase CLI.",
            technologies: ["Node.js", "Express.js", "Supabase", "BaaS", "Docker"],
            features: [
                "Gestione post e commenti con ruoli utente",
                "Autenticazione e database tramite Supabase",
                "Dashboard per amministratori e autori"
            ],
            github: "https://github.com/osama-fth/Supabase-Blog",
            year: "2026"
        }
    ],

    // Contatti
    contacts: {
        github: {
            username: "osama-fth",
            url: "https://github.com/osama-fth"
        },
        linkedin: {
            username: "osama-foutih",
            url: "https://linkedin.com/in/osama-foutih"
        },
        social: [
            {
                platform: "GitHub",
                icon: "github",
                url: "https://github.com/osama-fth",
                color: "text-light"
            },
            {
                platform: "LinkedIn",
                icon: "linkedin",
                url: "https://linkedin.com/in/osama-foutih",
                color: "text-primary"
            }
        ]
    },

    languages: [
        { name: "Italiano", level: "Madrelingua" },
        { name: "Inglese", level: "Intermedio" },
        { name: "Arabo", level: "Intermedio" },

    ]
};

export const { profile, education, experiences, skills, projects, contacts, languages } = portfolioData;
