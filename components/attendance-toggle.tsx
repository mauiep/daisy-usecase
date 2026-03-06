"use client"

import { useState } from "react"
import { updateAttendance } from "@/lib/api"

export default function AttendanceToggle({ participant, workshopId }: any) {
  const [status, setStatus] = useState(participant.attendance)
  const [loading, setLoading] = useState(false)

  async function update(newStatus: "present" | "absent") {
    setStatus(newStatus)
    setLoading(true)

    try {
      await updateAttendance(workshopId, participant.id, newStatus)
    } catch {
      alert("Failed to update attendance")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <button
        disabled={loading}
        onClick={() => update("present")}
        className={`min-h-10 rounded-full px-3 text-sm font-medium transition ${
          status === "present"
            ? "bg-green-500 text-white"
            : "bg-black/5 text-black"
        }`}
      >
        Présent
      </button>

      <button
        disabled={loading}
        onClick={() => update("absent")}
        className={`min-h-10 rounded-full px-3 text-sm font-medium transition ${
          status === "absent"
            ? "bg-[#F24E3E] text-white"
            : "bg-black/5 text-black"
        }`}
      >
        Absent
      </button>
    </div>
  )
}
