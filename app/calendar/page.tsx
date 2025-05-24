"use client"
import { getAllAppointments } from "@/appwrite"
import { MyCalendar } from "@/components/MyCalendar"
import React, { useEffect, useState } from "react"

type CalendarEvent = {
  id: string
  title: string
  start: Date
  end: Date
}

const Calander = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  console.log("appointments", events)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllAppointments()

      const formattedEvents = data.map((doc) => {
        const start = new Date(doc.date)
        const end = new Date(start.getTime() + 30 * 60 * 1000)

        return {
          id: doc.$id,
          title: `${doc.name} – ${doc.service}`,
          start,
          end,
        }
      })

      setEvents(formattedEvents)
    }

    fetchData()
  }, [])

  return (
    <div className="h-screen flex justify-center bg-gray-50">
      <div className="main-container p-10 bg-white max-w-5xl w-full border rounded-3xl m-10">
        <MyCalendar events={events} setEvents={setEvents} />
      </div>
    </div>
  )
}

export default Calander
