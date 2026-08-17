import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      {import.meta.env.VITE_TEXT}
      {import.meta.env.VITE_BOOL}
    </div>
  )
}
