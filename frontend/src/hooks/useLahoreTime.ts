import { useEffect, useState } from 'react'

const fmtLocal = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
})
const fmtLahore = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Karachi',
  hour: 'numeric',
  minute: '2-digit',
})
const fmtLahoreHour = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Karachi',
  hour: '2-digit',
  hour12: false,
})

interface LahoreTime {
  tLocal: string
  tLahore: string
  overlapMsg: string
  statusMsg: string
}

function trim(n: number): string {
  return String(n).replace(/\.0$/, '')
}

function compute(): LahoreTime {
  const now = new Date()

  // Overlap of two 9:00–18:00 workdays, Lahore = UTC+5 (no DST).
  const diffH = (-now.getTimezoneOffset() - 300) / 60
  const overlap = Math.round(Math.max(0, 9 - Math.abs(diffH)) * 2) / 2

  let overlapMsg: string
  if (Math.abs(diffH) < 0.5) {
    overlapMsg = "We're in the same time zone: zero scheduling friction."
  } else if (overlap >= 3) {
    overlapMsg = `Our working days overlap about ${trim(overlap)} hours, plenty of room for stand-ups and pairing.`
  } else if (overlap > 0) {
    overlapMsg = `Our working days overlap ${trim(overlap)} hours, enough for a daily sync; I work async by default.`
  } else {
    overlapMsg =
      'Almost no default overlap, but good thing my hours flex toward yours.'
  }

  const h = parseInt(fmtLahoreHour.format(now), 10)
  const statusMsg =
    h >= 8 && h < 20
      ? "I'm probably at my desk right now."
      : h >= 20
        ? "It's evening here, and I'm likely still around."
        : "It's the middle of the night here, but I'll reply first thing."

  return {
    tLocal: fmtLocal.format(now),
    tLahore: fmtLahore.format(now),
    overlapMsg,
    statusMsg,
  }
}

export function useLahoreTime(): LahoreTime {
  const [time, setTime] = useState<LahoreTime>(compute)

  useEffect(() => {
    const id = setInterval(() => setTime(compute()), 30000)
    return () => clearInterval(id)
  }, [])

  return time
}
