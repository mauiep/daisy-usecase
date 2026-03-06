"use client"

import { useEffect, useState } from "react"
import { getWorkshops } from "@/lib/api"
import WorkshopCard from "@/components/workshop-card"
import Image from "next/image"

export default function Home() {
  const [workshops, setWorkshops] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getWorkshops()
      .then(setWorkshops)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="mx-auto min-h-screen max-w-md px-4 py-6">

	<header className="mb-6 flex flex-col gap-3">
  		<div className="flex items-center">
    	    <Image
      		    src="/daisy-logo.png"
                alt="Daisy"
                width={120}
                height={32}
                priority
                className="h-8 w-auto"
            />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-black">
            Ateliers du jour
        </h1>
    </header>
      {loading && <p className="text-sm text-black/70">Loading workshops...</p>}
      {error && <p className="text-sm text-[#F24E3E]">Error loading workshops</p>}
      {!loading && !error && workshops.length === 0 && (
        <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm">
          No workshops today
        </div>
      )}

      <div className="space-y-3">
        {workshops.map((w: any) => (
          <WorkshopCard key={w.id} workshop={w} />
        ))}
      </div>
    </main>
  )
}
