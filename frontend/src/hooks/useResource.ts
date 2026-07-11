import { useEffect, useState } from 'react'
import { apiGet } from '../services/apiClient'

type ResourceSource = 'loading' | 'live' | 'fallback'

interface ResourceState<T> {
  data: T
  source: ResourceSource
}

export function useResource<T>(path: string, fallback: T): ResourceState<T> {
  const [state, setState] = useState<ResourceState<T>>({
    data: fallback,
    source: 'loading',
  })

  useEffect(() => {
    let cancelled = false

    apiGet<T>(path)
      .then((data) => {
        if (!cancelled) setState({ data, source: 'live' })
      })
      .catch(() => {
        if (!cancelled) setState({ data: fallback, source: 'fallback' })
      })

    return () => {
      cancelled = true
    }
  }, [path, fallback])

  return state
}
