"use client"
import { getAllAppointments } from "@/appwrite"
import { Appointment } from "@/types"
import React, { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const allAppointmentsRaw = await getAllAppointments()
        const allAppointments: Appointment[] = allAppointmentsRaw.map(
          (item) => ({
            $id: item.$id,
            $createdAt: item.$createdAt,
            $updatedAt: item.$updatedAt,
            name: item.name,
            service: item.service,
            date: item.date,
            email: item.email,
            phone: item.phone,
            time: item.time,
          })
        )
        setAppointments(allAppointments)
      } catch (err) {
        console.error(err)
      }
    }
    fetchAppointments()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Afsprakenoverzicht</h2>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Naam</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Tijd</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Telefoon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appt) => (
              <TableRow key={appt.$id}>
                <TableCell>{appt.name}</TableCell>
                <TableCell>{appt.service}</TableCell>
                <TableCell>
                  {new Date(appt.date).toLocaleDateString("nl-NL")}
                </TableCell>
                <TableCell>{appt.time}</TableCell>
                <TableCell>{appt.email}</TableCell>
                <TableCell>{appt.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Appointments
