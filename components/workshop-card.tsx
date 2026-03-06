import Link from "next/link"

export default function WorkshopCard({ workshop }: any) {
  const fillRatio = Math.round((workshop.booked / workshop.capacity) * 100)

  return (
    <Link
      href={`/workshops/${workshop.id}`}
      className="block rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-black">{workshop.title}</h2>
          <p className="mt-1 text-sm text-black/65">
            {workshop.start} – {workshop.end}
          </p>
          <p className="text-sm text-black/65">{workshop.studio}</p>
        </div>

        <div className="rounded-full bg-[#800080] px-3 py-1 text-xs font-medium text-white">
          {workshop.booked}/{workshop.capacity}
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 rounded-full bg-black/10">
          <div
            className="h-2 rounded-full bg-[#F24E3E]"
            style={{ width: `${fillRatio}%` }}
          />
        </div>
      </div>
    </Link>
  )
}
