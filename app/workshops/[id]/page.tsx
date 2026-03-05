"use client"

import { useEffect, useState } from "react"
import { getParticipants } from "@/lib/api"
import ParticipantRow from "@/components/participant-row"

export default function WorkshopPage({ params }: any) {
  const [participants, setParticipants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getParticipants(params.id)
      .then(setParticipants)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [params.id])

  if (loading) return <p className="p-4">Loading participants...</p>
  if (error) return <p className="p-4">Error loading participants</p>
  if (!participants.length) return <p className="p-4">No participants</p>

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Participants</h1>

      {participants.map((p: any) => (
        <ParticipantRow
          key={p.id}
          participant={p}
          workshopId={params.id}
        />
      ))}
    </main>
  )
}
