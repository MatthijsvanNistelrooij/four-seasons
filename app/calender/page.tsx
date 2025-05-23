"use client"
import { MyCalendar } from "@/components/MyCalendar"
import React, { useState } from "react"

const Calander = () => {
  const now = new Date()

  const [events, setEvents] = useState([
    {
      title: "Mario – Fade",
      start: new Date(now.getTime() + 0 * 0 * 1000),
      end: new Date(now.getTime() + 0 * 60 * 1000),
    },
    {
      title: "Jack – Beard",
      start: new Date(now.getTime() + 0 * 0 * 1000),
      end: new Date(now.getTime() + 0 * 60 * 1000),
    },
  ])

  return (
    <div className="space-y-12 p-20 bg-gray-100">
      <MyCalendar events={events} setEvents={setEvents} />
    </div>
  )
}

export default Calander
