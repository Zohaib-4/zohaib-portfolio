import type { ReactNode } from 'react'
import { Section } from '../ui/Section'

interface Row {
  t: string
  v: ReactNode
}

const b = (children: ReactNode) => (
  <b className="font-semibold text-ink">{children}</b>
)

const ROWS: Row[] = [
  {
    t: 'Languages',
    v: (
      <>
        {b('Python')} · {b('TypeScript')} · JavaScript · SQL · Java · C++
      </>
    ),
  },
  {
    t: 'Backend',
    v: (
      <>
        {b('FastAPI')} · {b('Django')} &amp; DRF · REST APIs · Apache Kafka
      </>
    ),
  },
  {
    t: 'Frontend',
    v: <>{b('React')} with TypeScript</>,
  },
  {
    t: 'Cloud & DevOps',
    v: (
      <>
        {b('AWS')} · {b('GCP')} · Docker · Kubernetes · ArgoCD · GitHub Actions
      </>
    ),
  },
  {
    t: 'Data',
    v: <>{b('PostgreSQL')} · DynamoDB · Redis · BigQuery · OpenSearch</>,
  },
  {
    t: 'AI & ML',
    v: <>{b('PyTorch')} · TensorFlow · Hugging Face · RAG &amp; embeddings</>,
  },
  {
    t: 'Observability',
    v: <>{b('Grafana')} · Prometheus · Sentry · Loki</>,
  },
]

export function Toolbox() {
  return (
    <Section id="toolbox" kicker="Toolbox" title="What I reach for.">
      <div className="r border-t-2 border-ink">
        {ROWS.map((row) => (
          <div
            key={row.t}
            className="grid grid-cols-1 gap-1 border-b border-hairline py-4 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] sm:gap-6"
          >
            <span className="pt-0.5 text-xs font-bold uppercase tracking-[.14em] text-accent">
              {row.t}
            </span>
            <span className="text-[14.5px] leading-[1.7] text-dim">
              {row.v}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
