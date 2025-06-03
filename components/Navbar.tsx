"use client"
// import { useCart } from "@/context/CartContext"
// import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image from "../public/kapsalon-four-seasons-groningen.png"

const Navbar = () => {
  // const { totalQuantity, cart } = useCart()

  // const extractedCartId = cart?.id?.split("/").pop()

  return (
    <div className="flex justify-center items-center p-4 sticky top-0 bg-white text-black border-gray-700 shadow-lg z-50">
      <div className="flex gap-2 px-12">
        <Link href={"/"} className="text-black px-1 py-2 transition-all -ml-2">
          <Image src={image} height={100} width={410} alt="Logo" />
        </Link>
        <div className="flex justify-between gap-12 ml-8">
          <Link
            href={"/"}
            className="font-big mt-2 border-b-2 border-[#e9207e] text-lg font-bold text-black "
          >
            Home
          </Link>

          <Link
            href={"/about"}
            className="font-big mt-2 text-lg font-bold text-black "
          >
            Over
          </Link>

          <Link
            href={"/"}
            className="font-big mt-2 text-lg font-bold text-black "
          >
            Behandelingen
          </Link>
          <Link
            href={"/"}
            className="font-big mt-2 text-lg font-bold text-black "
          >
            Beauty
          </Link>
          <Link
            href={"/behandelingen"}
            className="flex  border text-lg font-bold text-white bg-black rounded-full px-4 p-1 m-2"
          >
            Contact
          </Link>
        </div>

        {/* <Link
          href={"/products"}
          className="text-black px-4 py-2 rounded border border-gray-700 hover:shadow-xl transition-all"
        >
          <ShoppingBag className="md:hidden" />{" "}
          <h1 className="hidden md:block">Shop</h1>
        </Link> */}
      </div>
      <div className="mr-8 flex flex-col">
        <div className="font-bold text-lg">Reitemakersrijge</div>
        <div className="flex justify-end gap-2 text-lg">
          <span className="font-bold"> 3</span>
          Groningen
        </div>
      </div>
      {/* <Link
        href={`/cart/${extractedCartId}`}
        className="text-black flex items-center gap-2 px-4 py-2 rounded border border-gray-700 hover:shadow-xl transition-all"
      >
        🛒 <span>({totalQuantity})</span>
      </Link> */}
    </div>
  )
}

export default Navbar
