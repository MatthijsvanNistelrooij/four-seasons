"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarRange, Phone, ChevronLeft, ChevronRight } from "lucide-react"

import hero from "../public/assets/hero.jpg"
import hero1 from "../public/assets/hero_1.jpg"
import hero2 from "../public/assets/hero_2.jpg"
import hero3 from "../public/assets/hero_3.jpg"
import hero4 from "../public/assets/hero_4.jpg"

const slides = [
  {
    image: hero1,
    heading: "Kapsalon Four Seasons",
    subtext:
      "Dames & herenkapper - Persoonlijke aandacht - 35+ jaar ervaring - Gespecialiseerd in opsteken, föhnen, stylen, verven, highlights en balayages",
  },
  {
    image: hero2,
    heading: "Gezichtsmassage",
    subtext:
      "Ontspan en geniet van een luxueuze gezichtsbehandeling in Groningen",
  },
  {
    image: hero3,
    heading: "Beauty behandelingen",
    subtext:
      "Ontspan en geniet van een luxueuze gezichtsbehandeling in Groningen",
  },
  {
    image: hero4,
    heading: "Manicure behandelingen",
    subtext:
      "Ontspan en geniet van een luxueuze manicure behandeling in Groningen",
  },
  {
    image: hero,
    heading: "Nagel ontwerpen",
    subtext: "Verwen jezelf met de mooiste nagel ontwerpen",
  },
]

type HeroProps = {
  onOpenDialog: () => void
}

const Hero = ({ onOpenDialog }: HeroProps) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    // Start a new one
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 7000)
  }

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    startAutoSlide()
  }

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
    startAutoSlide()
  }

  const appointmentText = "MAAK EEN AFSPRAAK"
  const contactText = "CONTACT"

  return (
    <section className="relative w-full bg-black md:min-h-[80vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[index].image}
            alt="Slide"
            fill
            className="object-cover w-full h-full opacity-70"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="flex container mx-auto h-full items-center px-4 py-16 md:py-20">
        <div className="w-full z-10 text-white">
          {/* Nav Buttons */}
          <button
            aria-label="Previous slide"
            onClick={goToPrevious}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 py-4 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next slide"
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 py-4 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Text Content */}
          <div className="flex flex-col items-start justify-center h-full">
            <motion.h1
              key={`heading-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {slides[index].heading}
            </motion.h1>

            <motion.div
              key={`sub-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-left text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mt-4"
            >
              <p className="leading-9 bg-black bg-opacity-30 inline px-1 py-1 rounded">
                {slides[index].subtext}
              </p>
            </motion.div>

            <motion.div
              key={`contact-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 lg:mt-10"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={onOpenDialog}
                  className="bg-[#e9207e] hover:bg-[#e9207e] transition-transform duration-200 rounded-full px-6 py-4 text-sm sm:text-base tracking-widest"
                >
                  <CalendarRange className="w-4 h-4 mr-2" />
                  {appointmentText}
                </Button>
                <Button className="bg-[#e9207e] hover:bg-[#e9207e] transition-transform duration-200 rounded-full px-6 py-4 text-sm sm:text-base tracking-widest">
                  <Phone className="w-4 h-4 mr-2" />
                  {contactText}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex gap-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              startAutoSlide()
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === i
                ? "border-2 border-white bg-transparent"
                : "bg-gray-800 border-2 border-transparent"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
