"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "../public/kapsalon-four-seasons-groningen.png"
import { List, Menu } from "lucide-react"
// import { useCart } from "@/context/CartContext"
// import { ShoppingBag } from "lucide-react"

// const { totalQuantity, cart } = useCart()

// const extractedCartId = cart?.id?.split("/").pop()

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 shadow-lg z-50 bg-white">
      <div className="flex container mx-auto justify-between items-center py-4 bg-white text-black border-gray-700 px-8">
        <Link href={"/"} className="text-black py-2 transition-all">
          <Image src={image} height={100} width={400} alt="Logo" />
        </Link>

        <div className="hidden lg:flex gap-8 ml-8 items-center">
          <Link
            href="/"
            className="font-big border-b-2 border-[#e9207e] text-lg font-bold"
          >
            Home
          </Link>
          <Link href="/about" className="font-big text-lg font-bold">
            Over
          </Link>
          <Link href="/" className="font-big text-lg font-bold">
            Behandelingen
          </Link>
          <Link href="/" className="font-big text-lg font-bold">
            Beauty
          </Link>
          <Link
            href="/behandelingen"
            className="border text-lg font-bold text-white bg-black rounded-full px-4 py-1"
          >
            Contact
          </Link>
        </div>

        <div className="lg:hidden ml-5">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            <Menu className="mt-1" />
          </button>
        </div>

        <div className="hidden lg:flex flex-col mr-8">
          <div className="font-bold text-lg">Reitemakersrijge</div>
          <div className="flex justify-end gap-2 text-lg">
            <span className="font-bold">3</span>
            Groningen
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white shadow-md border-t z-40 flex flex-col items-start px-8 py-4 lg:hidden space-y-7">
            <Link href="/" className="py-2 text-lg font-bold w-full">
              Home
            </Link>
            <Link href="/about" className="py-2 text-lg font-bold w-full">
              Over
            </Link>
            <Link href="/" className="py-2 text-lg font-bold w-full">
              Behandelingen
            </Link>
            <Link href="/" className="py-2 text-lg font-bold w-full">
              Beauty
            </Link>

            <Link
              href="/behandelingen"
              className="py-2 text-lg font-bold w-full text-white bg-black rounded-full text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
