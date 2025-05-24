"use client"
import { useCart } from "@/context/CartContext"
import { Calendar, Calendar1, ShoppingBag } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  const { totalQuantity, cart } = useCart()

  const extractedCartId = cart?.id?.split("/").pop()

  return (
    <div className="flex justify-between items-center p-4 sticky top-0 bg-white text-black border-gray-700 shadow-lg z-50">
      <div className="flex gap-2">
        <Link
          href={"/"}
          className="text-black px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-200 transition-all"
        >
          FOUR SEASONS
        </Link>
        <Link
          href={"/products"}
          className="text-black px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-200 transition-all"
        >
          <ShoppingBag className="md:hidden" />{" "}
          <h1 className="hidden md:block">Shop</h1>
        </Link>

        <Link
          href={"/calendar"}
          className="text-black px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-200 transition-all"
        >
          <Calendar1 className="md:hidden" />{" "}
          <h1 className="hidden md:block">Book Appointment</h1>
        </Link>
      </div>

      <Link
        href={`/cart/${extractedCartId}`}
        className="text-black flex items-center gap-2 px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-200 transition-all"
      >
        🛒 <span>({totalQuantity})</span>
      </Link>
    </div>
  )
}

export default Navbar
