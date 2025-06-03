"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "../public/kapsalon-four-seasons-groningen.png"
// import { useCart } from "@/context/CartContext"
// import { ShoppingBag } from "lucide-react"

// const { totalQuantity, cart } = useCart()

// const extractedCartId = cart?.id?.split("/").pop()

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 shadow-lg z-50">
      <div className="flex container mx-auto justify-between items-center py-4 bg-white text-black border-gray-700">
        <Link href={"/"} className="text-black px-1 py-2 transition-all ml-4">
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

        <div className="lg:hidden mr-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            ☰
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
          <div className="absolute top-[100%] left-0 w-full bg-white shadow-md border-t z-40 flex flex-col items-start px-6 py-4 lg:hidden">
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
