import { NextRequest } from "next/server"
import { participants } from "@/lib/mock-db"

type Params = { id: string }

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { id } = await params
    const list = participants.filter((p) => p.workshopId === id)
    return Response.json(list)
  } catch (e) {
    return Response.json({ error: "Failed to fetch participants" }, { status: 500 })
  }
}
