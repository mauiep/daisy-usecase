import { participants } from "@/lib/mock-db"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const workshopParticipants = participants.filter(
      (p) => p.workshopId === params.id
    )

    if (!workshopParticipants.length) {
      return Response.json([])
    }

    return Response.json(workshopParticipants)

  } catch (error) {
    return new Response("Failed to fetch participants", { status: 500 })
  }
}
