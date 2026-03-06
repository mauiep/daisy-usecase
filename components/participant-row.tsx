import AttendanceToggle from "./attendance-toggle"

export default function ParticipantRow({ participant, workshopId }: any) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div>
        <p className="text-sm font-medium text-black">{participant.name}</p>
      </div>

      <AttendanceToggle participant={participant} workshopId={workshopId} />
    </div>
  )
}
