"use client"
import Image from "next/image"
import barber1 from "../public/assets/barber1.jpg"
import barber2 from "../public/assets/barber2.jpg"
import barber3 from "../public/assets/barber3.jpg"

import Link from "next/link"
import Hero from "@/components/Hero"
import { useState } from "react"
import { AppointmentDialog } from "@/components/AppointmentDialog"

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <Hero onOpenDialog={() => setOpenDialog(true)} />
      <div className="hidden">
        <AppointmentDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          title="MAAK EEN AFSPRAAK"
        />
      </div>

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center py-20 px-1 md:px-16">
        <div className="md:w-1/2 md:pl-2 m-5">
          <Image
            width={500}
            src={barber1}
            alt="Our Barbers"
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 m-5">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            At Sharp Style, we’ve been perfecting our craft for over a decade.
            Our barbers bring a mix of traditional techniques and modern style
            to every cut.
          </p>
        </div>
      </section>

      {/* Section 2 with CTA */}
      <section className="flex flex-col md:flex-row items-center py-20 px-6 md:px-16 bg-gray-100">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-lg text-gray-700 mb-6">
            Avoid the wait and lock in your spot. Our easy online booking system
            ensures youre in the chair right on time.
          </p>
          <Link
            href={"/calendar"}
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <Image
            width={500}
            height={500}
            src={barber2}
            alt="Booking"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center py-20 px-6 md:px-16">
        <div className="md:w-1/2 md:pl-12">
          <Image
            width={500}
            height={500}
            src={barber3}
            alt="Booking"
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2 mb-20 md:mb-0 flex flex-col m-5">
          <h2 className="text-3xl font-bold mb-4">Products We Use</h2>
          <p className="text-lg text-gray-600">
            We only use high-quality grooming products to ensure the best
            experience. From pomades to straight razors, everything is top
            shelf.
          </p>
          <Link
            href={"/products"}
            className="px-6 py-3 mt-8 w-32 border bg-black text-white rounded hover:bg-gray-800 hover:text-white transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sharp Style Barbers. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}
