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
    <div className="h-screen flex justify-center bg-gray-50">
      <div className="main-container p-10 bg-white max-w-5xl w-full border rounded-3xl m-10">
        <MyCalendar events={events} setEvents={setEvents} />
      </div>
    </div>
  )
}

export default Calander
