import { workshops, participants } from "@/lib/mock-db"

export async function GET() {
  try {
    const data = workshops.map((workshop) => {
      const booked = participants.filter(
        (p) => p.workshopId === workshop.id
      ).length

      return {
        ...workshop,
        booked
      }
    })

    return Response.json(data)

  } catch (error) {
    return new Response("Failed to fetch workshops", { status: 500 })
  }
}
