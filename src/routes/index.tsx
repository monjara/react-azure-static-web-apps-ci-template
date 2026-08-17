import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const text = import.meta.env.VITE_TEXT
  const bool = import.meta.env.VITE_BOOL
  return (
    <div className="p-8">
      ddd branch!
      {text}
      {bool && <div>Bool is true</div>}
    </div>
  )
}
