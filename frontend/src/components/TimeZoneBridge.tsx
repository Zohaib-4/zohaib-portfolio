import { useLahoreTime } from '../hooks/useLahoreTime'
import { Container } from './layout/Container'

/**
 * The site's signature closing line: proves, with the visitor's own clock,
 * how much of a remote workday actually overlaps with Lahore.
 */
export function TimeZoneBridge() {
  const { tLocal, tLahore, overlapMsg, statusMsg } = useLahoreTime()

  return (
    <Container>
      <p className="r border-t border-hairline py-6 font-heading text-[clamp(15px,1.8vw,17.5px)] leading-relaxed italic">
        It's <span className="not-italic text-accent">{tLocal}</span> where you
        are, and <span className="not-italic text-accent">{tLahore}</span> here
        in Lahore. {overlapMsg}{' '}
        <span className="not-italic text-dim">{statusMsg}</span>
      </p>
    </Container>
  )
}
