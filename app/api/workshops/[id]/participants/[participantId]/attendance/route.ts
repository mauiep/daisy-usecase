import { participants } from "@/lib/mock-db"

export async function PATCH(
  req: Request,
  { params }: { params: { participantId: string } }
) {

  const body = await req.json()

  const participant = participants.find(
    p => p.id === params.participantId
  )

  if (!participant) {
    return new Response("Not found", { status: 404 })
  }

  participant.attendance = body.status

  return Response.json(participant)
}
