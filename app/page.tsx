"use client"

import { useEffect, useState } from "react"
import { getWorkshops } from "@/lib/api"
import WorkshopCard from "@/components/workshop-card"

export default function Home() {
  const [workshops, setWorkshops] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getWorkshops()
      .then(setWorkshops)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="p-4">Loading workshops...</p>
  if (error) return <p className="p-4">Error loading workshops</p>
  if (!workshops.length) return <p className="p-4">No workshops today</p>

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Today's workshops</h1>

      {workshops.map((w: any) => (
        <WorkshopCard key={w.id} workshop={w} />
      ))}
    </main>
  )
}
