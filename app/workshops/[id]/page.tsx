"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getParticipants } from "@/lib/api"
import ParticipantRow from "@/components/participant-row"

export default function WorkshopPage() {
  const params = useParams<{ id: string }>()
  const workshopId = params.id

  const [participants, setParticipants] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!workshopId) return

    setLoading(true)
    setError(false)

    getParticipants(workshopId)
      .then((data) => setParticipants(Array.isArray(data) ? data : []))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [workshopId])

  if (loading) return <p className="p-4">Loading participants...</p>
  if (error) return <p className="p-4">Error loading participants</p>
  if (!participants.length) return <p className="p-4">No participants</p>

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Participants</h1>

      {participants.map((p: any) => (
        <ParticipantRow key={p.id} participant={p} workshopId={workshopId} />
      ))}
    </main>
  )
}
