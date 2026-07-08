# Muhammad Zohaib

Lahore, Pakistan

📞 +92 322 3363363 · ✉️ [m.zohaib6363@gmail.com](mailto:m.zohaib6363@gmail.com) · 💼 [linkedin.com/in/m-zohaib04](https://linkedin.com/in/m-zohaib04) · 🐙 [github.com/Zohaib-4](https://github.com/Zohaib-4)

🌐 [Zohaib's Portfolio](https://zohaibs-portfolio.vercel.app/)

---

## Summary

Software Engineer with production experience building scalable backend systems, REST APIs, and cloud-native applications on AWS and GCP. Proficient in Python, FastAPI, Django, React, and SQL, with a proven track record of delivering end-to-end solutions, from system architecture and database design to CI/CD automation and enterprise security integration.

---

## Professional Experience

**Techleadz** — *Software Engineer* | Lahore, Punjab
*June 2025 – Present*

- Architected and deployed production-grade full-stack systems on **AWS** and **GCP** for enterprise clients, improving internal workflows and driving operational efficiency across multiple business units.
- Owned end-to-end software delivery: REST API design, data pipelines, cloud infrastructure, CI/CD automation with **GitHub Actions**, observability setup, and enterprise **SAML 2.0 SSO** integration.
- Drove milestone delivery through direct collaboration with product, engineering, and client stakeholders, translating business requirements and user feedback into reliable, scalable software shipped to production.
- Led UX and reliability improvements informed by end-user feedback, increasing trust in platform data and reducing manual verification effort for operations teams.
- Provided rotational on-call ownership for production systems, triaging incidents and resolving urgent client requests to maintain platform availability.

**Programmers Force** — *Data Science Intern* | Lahore, Punjab
*Aug 2024 – Oct 2024*

- Engineered an automated ETL pipeline in Python that scraped and processed **5K+ records** from **100+ static and dynamic websites**, overcoming anti-bot mechanisms using **Selenium** and **BeautifulSoup**.
- Built an API-driven data enrichment workflow integrating external NLP services, reducing manual annotation effort and improving downstream data quality for a production pipeline.
- Developed a semantic search and question-answering system over the full scraped dataset using LLM-based retrieval, enabling intelligent querying at scale.

---

## Key Projects

**Shepherd – Ad Operations Platform for Mozilla (Techleadz)** | *Django, React, PostgreSQL, BigQuery, GCP*

- Built and maintained a production ad-ops platform bridging **Boostr CRM** and the **Equativ** ad server, serving as the source of truth where campaign data is enriched and pushed downstream via a **Django REST Framework** API consumed by a **React 18 + TypeScript** dashboard.
- Developed bi-directional sync workflows with field-level change tracking, exposing a 3-state sync status (**synced / needs-resync / not-synced**) as both a model property and SQL annotation to keep UI indicators consistent with ad-server state.
- Engineered **BigQuery**-to-**PostgreSQL** ETL pipelines for delivery metrics and impression forecasts using an atomic three-table swap pattern (**Incoming → Current → Old**), ensuring zero-downtime bulk loads with no partial reads.
- Optimized delivery-metrics aggregation with **PostgreSQL materialized views** and trigger suspension during batch operations, powering **AG Grid Enterprise** dashboards with server-side filtering, grouping, and pivoting.
- Implemented asynchronous ad-server sync jobs on a DB-backed task queue with task-status polling, and contributed to a config-driven grid engine that turns Django models into fully filterable, sortable, paginated endpoints.
- Shipped via **GitHub Actions** CI/CD to **GCP** (**Kubernetes** orchestrated with **ArgoCD**), with observability across **Grafana**, **Prometheus**, **Sentry**, and Cloud Trace.

**Lighthouse – AI Knowledge Platform for CraneWW Logistics (Techleadz)** | *FastAPI, React, DynamoDB, AWS*

- Engineered a production platform serving **1,000+ users**: **FastAPI** microservices, **Amazon OpenSearch** for full-text and vector search, **DynamoDB** persistence, and **Redis** caching — achieving **sub-second response times**.
- Designed a scalable content ingestion and synchronization workflow with incremental change detection, reducing re-indexing effort by **80%** while keeping the knowledge base continuously up to date.
- Built an end-to-end observability pipeline using **Kafka**, **Snowflake**, and **Grafana** for real-time monitoring of system health, usage patterns, and API performance.
- Implemented **GitHub Actions** CI/CD pipelines and led migration from **EC2** to **ECS Fargate**, improving system scalability and reducing operational overhead.
- Integrated enterprise **SAML 2.0 SSO** with **Microsoft Entra ID**, strengthening platform security and streamlining user authentication across all services.

**Virtual Doctor — Full-Stack Health Assistant (FYP)** | *Python, Django, React, PyTorch, TensorFlow*

- Built a full-stack health assistant with a **Django REST API** backend and **React** frontend, integrating emotion recognition, voice sentiment, and symptom NLP models behind a single scalable API architecture.
- Designed and trained deep learning models (**PyTorch**, **TensorFlow**) for multimodal health analysis, achieving **85% accuracy** in real-time facial emotion detection via CNN on the FER2013 dataset.
- Fine-tuned a medical chatbot on **10K+ patient-doctor conversations** for intelligent diagnostic support; performed data preprocessing across FER2013, Sentiment140, and a custom medical corpus.

---

## Skills

**Languages:** Python, JavaScript, TypeScript, SQL, Java, C++, Solidity
**Frameworks & Libraries:** FastAPI, Django, Django REST Framework, React, RESTful APIs, Apache Kafka, BeautifulSoup, Selenium
**Cloud & DevOps:** AWS (ECS Fargate, EC2, VPC, Bedrock), GCP, Docker, Kubernetes, ArgoCD, CI/CD Pipelines, GitHub Actions, Jenkins
**Databases:** PostgreSQL, DynamoDB, Redis, BigQuery, OpenSearch
**AI & ML:** PyTorch, TensorFlow, Scikit-learn, Hugging Face, RAG, Embeddings, Prompt Engineering
**Observability:** Grafana, Prometheus, Sentry, Loki
**Productivity:** Jira, Notion, Agile/Scrum

---

## Education

**FAST National University** — *Bachelor of Science in Computer Science* | Lahore, Punjab
*June 2025*

- Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Database Management, Deep Learning, NLP