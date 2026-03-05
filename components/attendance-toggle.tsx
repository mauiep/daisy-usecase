"use client"

import { useState } from "react"
import { updateAttendance } from "@/lib/api"

export default function AttendanceToggle({ participant, workshopId }: any) {
  const [status, setStatus] = useState(participant.attendance)
  const [loading, setLoading] = useState(false)

  async function update(newStatus: "present" | "absent") {
    setStatus(newStatus) // optimistic
    setLoading(true)

    try {
      await updateAttendance(workshopId, participant.id, newStatus)
    } catch {
      alert("Failed to update attendance")
    }

    setLoading(false)
  }

  return (
    <div className="flex gap-2">
      <button
        disabled={loading}
        onClick={() => update("present")}
        className={`px-3 py-1 rounded ${
          status === "present"
            ? "bg-green-500 text-white"
            : "bg-gray-200"
        }`}
      >
        ✓
      </button>

      <button
        disabled={loading}
        onClick={() => update("absent")}
        className={`px-3 py-1 rounded ${
          status === "absent"
            ? "bg-red-500 text-white"
            : "bg-gray-200"
        }`}
      >
        ✕
      </button>
    </div>
  )
}
