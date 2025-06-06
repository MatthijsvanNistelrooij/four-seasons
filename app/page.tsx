"use client"
import Image from "next/image"
import logo_header from "../public/assets/logo_header.png"
import shop from "../public/assets/shop.png"
import treatment_1 from "../public/assets/treatment_1.png"

import Hero from "@/components/Hero"
import { useState } from "react"
import { AppointmentDialog } from "@/components/AppointmentDialog"
import GoogleReviews from "@/components/GoogleReviews"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Minus } from "lucide-react"

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="text-gray-800 flex flex-col justify-center">
      {/* Hero */}
      <Hero onOpenDialog={() => setOpenDialog(true)} />
      <div className="hidden">
        <AppointmentDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          title="MAAK EEN AFSPRAAK"
        />
      </div>

      <section className="w-full bg-white ">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-24 gap-5 lg:gap-12">
          <div className="w-full h-[400px] mb-10">
            <Image
              src={logo_header}
              alt="logo"
              width={1400}
              height={1400}
              className="object-cover h-[400px] rounded-xl shadow-2xl"
            />
          </div>

          <div className="w-full">
            <div className="max-w-xl md:mb-40">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                Ervaren dames & herenkapper in Groningen
              </h2>
              <p className="lg:text-lg text-gray-600">
                Bij ons kun je terecht voor een professionele en betaalbare
                knipbeurt. Wil je een nieuwe look uitproberen? Wij staan voor je
                klaar met een passend advies. Ook als je jouw haar wil laten
                bijwerken of gewoon wilt ontspannen met een kappersbehandeling,
                helpen we je graag. Als vertrouwde kapper in Groningen,
                begrijpen we dat jouw tijd kostbaar is. De combinatie van ruim
                35 jaar ervaring en persoonlijke aandacht, maken het mogelijk om
                snel en efficiënt te werken zonder afbreuk te doen aan de
                kwaliteit. Dat maakt onze kapsalon zo uniek én gezellig!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eaeaea]">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-24 gap-5 lg:gap-12">
          <div className="w-full h-[400px] mb-10">
            <Image
              src={treatment_1}
              alt="logo"
              width={1400}
              height={1400}
              className="object-cover h-[400px] rounded-xl shadow-2xl"
            />
          </div>
          <div className="w-full">
            <div className="max-w-xl md:mb-40">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                Ook voor beauty behandelingen
              </h2>
              <p className="lg:text-lg text-gray-600">
                Je gezicht weer laten stralen? Wees klaar voor elke gelegenheid
                met onze beauty behandelingen. U bent bij ons aan het juiste
                adres voor harsen, wimpers kleuren, tijdelijke wimpers,
                lamineren van de wimpers en wenkbrauwen, make-up. liftende
                gezichtmassages, gezichtsverzorgingen en wenkbrauw ontwerpen.
              </p>

              <Button className="group bg-black hover:bg-gray-900 text-white flex items-center gap-2 rounded-full mt-5 overflow-hidden relative px-4 py-2">
                <span className="relative h-5 w-5 overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-6">
                    <Minus />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-6 transition-transform duration-300 group-hover:translate-y-0 delay-350">
                    <ArrowRight />
                  </span>
                </span>
                Meer Lezen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 py-24 md:px-20 gap-5 lg:gap-20">
          <div className="w-full h-[400px] mb-10">
            <Image
              src={shop}
              alt="logo"
              width={1400}
              height={1400}
              className="object-cover h-[400px] rounded-xl shadow-2xl"
            />
          </div>

          <div className="w-full">
            <div className="max-w-xl md:mb-40">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                Verven, knippen, in model brengen en meer!
              </h2>
              <p className="lg:text-lg text-gray-600">
                Bij onze kapsalon in het hart van Groningen zijn wij specialist
                in verven, knippen, in model brengen en nog veel meer! Wij staan
                voor je klaar om aan jouw wensen te voldoen. We gebruiken alleen
                hoogwaardige producten en werken met de nieuwste technieken om
                ervoor te zorgen dat je tevreden bent met het resultaat. Maak
                een afspraak bij onze kapper in Groningen en we helpen je graag
                bij het bereiken van de perfecte look!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e9207e]">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch  md:px-20 px-8 py-24 gap-12">
          <div className="w-full h-[350px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252.76340790475925!2d6.561769514987872!3d53.21515910574965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd28d615ca8b%3A0x665498987f6ab9d4!2sKapsalon%20Four%20Seasons!5e1!3m2!1sen!2snl!4v1749164707339!5m2!1sen!2snl"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-md shadow-md"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-white w-full space-y-8">
            <h1 className="text-3xl font-medium font-sans">
              Openingstijden & Contact
            </h1>

            <div className="space-y-1 lg:text-xl">
              <p>
                <span className="font-bold">Ma</span> : 12:00 – 18:00
              </p>
              <p>
                <span className="font-bold">Di</span> : 10:00 – 19:00
              </p>
              <p>
                <span className="font-bold">Wo</span> : 10:00 – 19:00
              </p>
              <p>
                <span className="font-bold">Do</span> : 10:00 – 20:00
              </p>
              <p>
                <span className="font-bold">Vr</span> : 10:00 – 19:00
              </p>
              <p>
                <span className="font-bold">Za</span> : 10:00 – 18:00
              </p>
              <p>
                <span className="font-bold">Zo</span> : Gesloten
              </p>
            </div>

            <div className="text-sm md:text-base space-y-3">
              <p className="mb-12">
                <strong>tel.</strong>{" "}
                <a href="tel:0630717774" className="">
                  06 307 17774
                </a>
              </p>
              <p>
                <a href="mailto:nl.butterfly@hotmail.com" className="">
                  nl.butterfly@hotmail.com
                </a>
              </p>
              <p>
                <a href="mailto:nl.fourseasons@gmail.com" className="">
                  nl.fourseasons@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mx-auto flex flex-col justify-center py-40 md:px-20 p-8">
        <GoogleReviews />
      </section>

      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center  gap-14 py-32 bg-[#e9207e]">
        <div className="flex container h-full mx-auto items-center py-48 md:px-20 px-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-20 text-center text-white">
              Onze Prijzen
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {[
                { title: "Dames kort haar knippen", price: "€ 28,50" },
                { title: "Dames half-lang haar knippen", price: "€ 32,50" },
                { title: "Dames lang haar knippen", price: "€ 37,50" },
                { title: "Heren knippen", price: "€ 28,50" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded text-center w-full h-48 flex items-center flex-col justify-center"
                >
                  <p className="text-sm text-gray-900 font-bold mb-5">
                    {item.title}
                  </p>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-pink-500">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
