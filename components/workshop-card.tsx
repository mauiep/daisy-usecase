import Link from "next/link"

export default function WorkshopCard({ workshop }: any) {
  return (
    <Link
      href={`/workshops/${workshop.id}`}
      className="block border rounded-xl p-4 bg-white shadow-sm"
    >
      <div className="font-semibold">{workshop.title}</div>

      <div className="text-sm text-gray-500">
        {workshop.start} – {workshop.end}
      </div>

      <div className="text-sm">
        {workshop.booked}/{workshop.capacity} participants
      </div>
    </Link>
  )
}
