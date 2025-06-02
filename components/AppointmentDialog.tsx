// components/AppointmentDialog.tsx

"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

import { Step6_Confirm } from "./steps/Step6_Confirm"
import { Step1_Service } from "./steps/Step1_Service"
import { Step2_Barber } from "./steps/Step2_Barber"
import { Step3_Date } from "./steps/Step3_Date"
import { Step4_Time } from "./steps/Step4_Time"
import { Step5_Contact } from "./steps/Step5_Contact"
import { CalendarRange } from "lucide-react"
import { createAppointment } from "@/appwrite"

export function AppointmentDialog() {
  const [step, setStep] = useState(1)
  const [open, setOpen] = useState(false)

  const next = () => setStep((s) => Math.min(s + 1, 6))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const [formData, setFormData] = useState({
    service: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  })

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  function combineDateAndTime(date: Date, timeString: string): Date {
    const [hours, minutes] = timeString.split(":").map(Number)
    const combined = new Date(date)

    combined.setHours(hours)
    combined.setMinutes(minutes)
    combined.setSeconds(0)
    combined.setMilliseconds(0)

    return combined
  }

  const handleSubmit = async () => {
    const fullDate = combineDateAndTime(new Date(formData.date), formData.time)

    try {
      const newAppointment = await createAppointment({
        name: formData.name,
        service: formData.service,
        email: formData.email,
        phone: formData.phone,
        time: formData.time,
        date: fullDate.toISOString(), // ✅ Correct format here
      })

      console.log("Afspraak bevestigd ✅", newAppointment)
      alert("Afspraak succesvol geboekt!")
      setFormData({
        service: "",
        barber: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
      })
      setOpen(false)
      setStep(1)
    } catch (error) {
      console.error("Failed to submit appointment", error)
    }
  }

  const [rememberData, setRememberData] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("contact")
    if (saved) {
      const { name, email, phone } = JSON.parse(saved)
      setFormData((prev) => ({ ...prev, name, email, phone }))
      setRememberData(true) // Zet hier meteen true als er data is
    }
  }, [])

  useEffect(() => {
    if (rememberData) {
      const { name, email, phone } = formData
      localStorage.setItem("contact", JSON.stringify({ name, email, phone }))
    } else {
      localStorage.removeItem("contact")
    }
  }, [formData.name, formData.email, formData.phone, rememberData])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#e9207e] hover:bg-[#e9207e] rounded-full">
          <CalendarRange />
          MAAK EEN AFSPRAAK
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg !bg-white !rounded-xl border min-h-[620px] select-none">
        <DialogHeader className="">
          <DialogTitle>Afspraak boeken</DialogTitle>
          <DialogDescription>Stap {step} van 6</DialogDescription>
        </DialogHeader>

        <div className="py-1">
          {step === 1 && (
            <Step1_Service
              value={formData.service}
              onNext={next}
              onChange={(v) => updateFormData("service", v)}
            />
          )}
          {step === 2 && (
            <Step2_Barber
              value={formData.barber}
              onNext={next}
              onBack={back}
              onChange={(v) => updateFormData("barber", v)}
            />
          )}
          {step === 3 && (
            <Step3_Date
              date={formData.date ? new Date(formData.date) : null}
              onNext={next}
              onBack={back}
              onDateChange={(v) => updateFormData("date", v.toISOString())}
            />
          )}
          {step === 4 && (
            <Step4_Time
              time={formData.time}
              onNext={next}
              onBack={back}
              onTimeChange={(v) => updateFormData("time", v)}
            />
          )}
          {step === 5 && (
            <Step5_Contact
              name={formData.name}
              email={formData.email}
              phone={formData.phone}
              onNameChange={(v) => updateFormData("name", v)}
              onEmailChange={(v) => updateFormData("email", v)}
              onPhoneChange={(v) => updateFormData("phone", v)}
              rememberData={rememberData}
              setRememberData={setRememberData}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 6 && (
            <Step6_Confirm
              data={{
                ...formData,
                date: new Date(formData.date),
              }}
              onBack={back}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
