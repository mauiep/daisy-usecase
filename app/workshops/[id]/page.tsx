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

    getParticipants(workshopId)
      .then((data) => setParticipants(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [workshopId])

  return (
    <main className="mx-auto min-h-screen max-w-md px-4 py-6">
      <header className="mb-6">
        <p className="text-sm font-medium text-black/60">Workshop</p>
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Participants
        </h1>
      </header>

      {loading && <p className="text-sm text-black/70">Loading participants...</p>}
      {error && <p className="text-sm text-[#F24E3E]">Error loading participants</p>}
      {!loading && !error && participants.length === 0 && (
        <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm">
          No participants
        </div>
      )}

      <div className="space-y-3">
        {participants.map((p: any) => (
          <ParticipantRow key={p.id} participant={p} workshopId={workshopId} />
        ))}
      </div>
    </main>
  )
}
