import { useEffect, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="preloader" className={done ? 'preloader-done' : ''}>
      <div id="status">
        <div className="spinner" />
      </div>
    </div>
  )
}
