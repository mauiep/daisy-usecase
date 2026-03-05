import { NextRequest } from "next/server"
import { workshops, participants } from "@/lib/mock-db"

export async function GET(_req: NextRequest) {
  try {
    const data = workshops.map((w) => ({
      ...w,
      booked: participants.filter((p) => p.workshopId === w.id).length,
    }))
    return Response.json(data)
  } catch (e) {
    return new Response("Failed to fetch workshops", { status: 500 })
  }
}
