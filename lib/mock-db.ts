export type AttendanceStatus = "unknown" | "present" | "absent"

export type Workshop = {
  id: string
  title: string
  studio: string
  start: string
  end: string
  capacity: number
}

export type Participant = {
  id: string
  name: string
  workshopId: string
  attendance: AttendanceStatus
}

export const workshops: Workshop[] = [
  {
    id: "w1",
    title: "Cours aquarelle",
    studio: "Salle Lumière",
    start: "09:00",
    end: "11:00",
    capacity: 12
  },
  {
    id: "w2",
    title: "Modelage argile",
    studio: "Atelier Terre",
    start: "14:00",
    end: "16:00",
    capacity: 8
  }
]

export let participants: Participant[] = [
  {
    id: "p1",
    name: "Alice Martin",
    workshopId: "w1",
    attendance: "unknown"
  },
  {
    id: "p2",
    name: "Jean Dupont",
    workshopId: "w1",
    attendance: "unknown"
  },
  {
    id: "p3",
    name: "Sarah Lopez",
    workshopId: "w2",
    attendance: "present"
  }
]
