import type { ReactNode } from 'react'
import { Section } from '../ui/Section'

interface Outcome {
  n: string
  l: string
}

interface CaseStudyProps {
  num: string
  title: string
  client: string
  stack: string
  outcomes: Outcome[]
  children: ReactNode
}

function CaseStudy({
  num,
  title,
  client,
  stack,
  outcomes,
  children,
}: CaseStudyProps) {
  return (
    <article className="r grid grid-cols-1 gap-5 border-t border-hairline py-9 first:pt-0 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-16 md:py-14">
      <div>
        <p className="font-heading text-[15px] text-accent">{num}</p>
        <h3 className="mt-1.5 text-[clamp(1.5rem,2.6vw,1.9rem)]">{title}</h3>
        <p className="mt-2 text-[13px] text-dim">{client}</p>
        <p className="mt-6 text-[12.5px] leading-[1.9] tracking-[.04em] text-dim">
          {stack}
        </p>
      </div>
      <div className="story max-w-[62ch] space-y-[1.1em] text-[15px] leading-[1.8] text-dim [&_b]:font-semibold [&_b]:text-ink">
        {children}
        <div className="mt-6! flex flex-wrap gap-9">
          {outcomes.map((o) => (
            <div key={o.l} className="border-l-2 border-accent pl-3">
              <p className="font-heading text-[1.35rem] text-ink">{o.n}</p>
              <p className="mt-0.5 text-xs text-dim">{o.l}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

const lead = (label: string) => (
  <span className="mr-2.5 text-xs font-bold uppercase tracking-[.12em] text-accent">
    {label}
  </span>
)

export function Work() {
  return (
    <Section
      id="work"
      kicker="Selected work"
      title="Three systems, told the way they happened."
    >
      <div>
        <CaseStudy
          num="01"
          title="Ads Engine"
          client="Ad-operations platform · S&P 500 Company, via Techleadz"
          stack="Django · React 18 + TypeScript · PostgreSQL · BigQuery · GCP · Kubernetes · ArgoCD"
          outcomes={[
            { n: '0 downtime', l: 'bulk data loads' },
            { n: 'Field-level', l: 'drift detection' },
            { n: 'Full CI/CD', l: 'GitHub Actions → GCP' },
          ]}
        >
          <p>
            {lead('The problem')} The company's campaign data lived in two
            places: the <b>Boostr</b> CRM and the <b>Equativ</b> ad server. The
            two constantly drifted apart, and ops teams were verifying numbers
            by hand.
          </p>
          <p>
            {lead('What I built')} The source of truth that sits between them: a
            Django REST API and React dashboard with{' '}
            <b>bi-directional sync and field-level change tracking</b>, so every
            value knows whether it's synced, stale, or never sent. Underneath,
            BigQuery-to-PostgreSQL pipelines load delivery metrics through an{' '}
            <b>atomic three-table swap</b>, so bulk data lands with zero
            downtime and no partial reads, and materialized views keep
            enterprise dashboards fast.
          </p>
          <p>
            {lead('What changed')} Ops teams stopped double-checking the
            platform and started trusting it. Manual verification effort went
            down; confidence in the data went up.
          </p>
        </CaseStudy>

        <CaseStudy
          num="02"
          title="Operator Assistant"
          client="AI knowledge platform · Logistics Giant, via Techleadz"
          stack="FastAPI · React · OpenSearch · DynamoDB · Redis · Kafka · AWS ECS Fargate"
          outcomes={[
            { n: '1,000+', l: 'daily users served' },
            { n: '<1s', l: 'response times' },
            { n: '−80%', l: 're-indexing effort' },
          ]}
        >
          <p>
            {lead('The problem')} Over a thousand logistics professionals needed
            answers buried across company knowledge, and searching it was slow
            and unreliable.
          </p>
          <p>
            {lead('What I built')} A production platform of{' '}
            <b>FastAPI microservices</b> with <b>full-text and vector search</b>{' '}
            on OpenSearch, DynamoDB persistence, and Redis caching, and answers
            come back in <b>under a second</b>. An incremental sync pipeline
            detects what actually changed, cutting re-indexing effort by 80%
            while the knowledge base stays current. Enterprise{' '}
            <b>SAML SSO with Microsoft Entra ID</b>, and a Kafka → Snowflake →
            Grafana pipeline watching it all in real time.
          </p>
          <p>
            {lead('What changed')} I also led the migration from EC2 to{' '}
            <b>ECS Fargate</b>, for better scaling, less operational overhead,
            and quieter on-call.
          </p>
        </CaseStudy>

        <CaseStudy
          num="03"
          title="Virtual Doctor"
          client="Full-stack health assistant · final-year project, FAST-NU"
          stack="Python · Django · React · PyTorch · TensorFlow"
          outcomes={[
            { n: '85%', l: 'emotion-detection accuracy' },
            { n: '3 models', l: 'behind one API' },
            { n: '10K+', l: 'conversations fine-tuned' },
          ]}
        >
          <p>
            {lead('The question')} Could a web app understand how a patient{' '}
            <b>feels</b>, not just what they type?
          </p>
          <p>
            {lead('What I built')} A health assistant that reads three signals
            at once: <b>facial emotion recognition</b> (a CNN hitting 85%
            accuracy in real time), <b>voice sentiment</b>, and{' '}
            <b>symptom NLP</b>, all behind one Django REST API with a React
            front end. A medical chatbot fine-tuned on{' '}
            <b>10,000+ patient–doctor conversations</b> handles the dialogue.
          </p>
        </CaseStudy>
      </div>
    </Section>
  )
}
