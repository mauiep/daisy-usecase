import { NextRequest } from "next/server"
import { workshops } from "@/lib/mock-db"

type Params = { id: string }

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params

  const workshop = workshops.find((w) => w.id === id)

  if (!workshop) {
    return Response.json({ error: "Workshop not found" }, { status: 404 })
  }

  return Response.json(workshop)
}
