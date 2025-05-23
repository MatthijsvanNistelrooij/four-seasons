"use client"
import { MyCalendar } from "@/components/MyCalendar"
import React, { useState } from "react"

const Calander = () => {
  const now = new Date()

  const [events, setEvents] = useState([
    {
      title: "Mario – Fade",
      start: now,
      end: new Date(now.getTime() + 30 * 60 * 1000), // 30 mins later
    },
    {
      title: "Jack – Beard",
      start: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        now.getHours(),
        now.getMinutes()
      ),
      end: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        now.getHours(),
        now.getMinutes() + 30
      ),
    },
  ])

  return (
    <div className="space-y-12 p-20 bg-gray-100">
      <MyCalendar events={events} setEvents={setEvents} />
    </div>
  )
}

export default Calander
