import AttendanceToggle from "./attendance-toggle"

export default function ParticipantRow({ participant, workshopId }: any) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3">
      <span>{participant.name}</span>

      <AttendanceToggle
        participant={participant}
        workshopId={workshopId}
      />
    </div>
  )
}
