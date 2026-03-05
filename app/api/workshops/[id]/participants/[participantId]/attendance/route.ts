import { NextRequest } from "next/server"
import { participants } from "@/lib/mock-db"

type Params = { id: string; participantId: string }

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { participantId } = await params
    const body = await req.json()
    const status = body?.status as "present" | "absent" | "unknown"

    if (!["present", "absent", "unknown"].includes(status)) {
      return new Response("Invalid status", { status: 400 })
    }

    const participant = participants.find((p) => p.id === participantId)
    if (!participant) {
      return new Response("Participant not found", { status: 404 })
    }

    participant.attendance = status
    return Response.json(participant)
  } catch {
    return new Response("Failed to update attendance", { status: 500 })
  }
}
