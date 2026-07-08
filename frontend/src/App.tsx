import { useEffect, useState } from 'react'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

function App() {
  const [health, setHealth] = useState<'loading' | 'ok' | 'error'>('loading')

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/health`)
      .then((res) => (res.ok ? setHealth('ok') : setHealth('error')))
      .catch(() => setHealth('error'))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">Muhammad Zohaib</h1>
      <p className="text-[var(--text-muted)]">
        Phase 0 scaffold — content lands in later phases.
      </p>
      <p className="font-mono text-sm">
        Backend health:{' '}
        <span
          className={
            health === 'ok'
              ? 'text-[var(--success)]'
              : health === 'error'
                ? 'text-[var(--danger)]'
                : 'text-[var(--text-muted)]'
          }
        >
          {health}
        </span>
      </p>
    </main>
  )
}

export default App
