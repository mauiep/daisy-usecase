export async function getWorkshops() {
  const res = await fetch("/api/workshops")
  if (!res.ok) throw new Error("Failed to load workshops")
  return res.json()
}

export async function getParticipants(workshopId: string) {
  const res = await fetch(`/api/workshops/${workshopId}/participants`)
  if (!res.ok) throw new Error("Failed to load participants")
  return res.json()
}

export async function updateAttendance(
  workshopId: string,
  participantId: string,
  status: "present" | "absent"
) {
  const res = await fetch(
    `/api/workshops/${workshopId}/participants/${participantId}/attendance`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    }
  )

  if (!res.ok) throw new Error("Failed to update attendance")

  return res.json()
}
