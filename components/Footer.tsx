import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"
// import matp from "../public/matp.png"

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-24">
        <div className="container mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12">
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={250}
              height={250}
              className="object-contain"
            />
            <div className="flex w-44 mt-5">
              Copyright © 2025 Kapsalon Four Seasons All rights reserved.
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end flex-1 gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-[#e9207e]">Pagina’s</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className="hover:underline">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link href="/tarieven" className="hover:underline">
                    Tarieven
                  </Link>
                </li>
                <li>
                  <Link href="/beauty" className="hover:underline">
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link href="/behandelingen" className="hover:underline">
                    Behandelingen
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Openingstijden */}
            <div>
              <h3 className="font-semibold mb-4 text-[#e9207e]">
                Openingstijden & contact
              </h3>
              <ul className="space-y-1 text-sm">
                <li>Ma: 12:00 – 18:00</li>
                <li>Di: 10:00 – 19:00</li>
                <li>Wo: 10:00 – 19:00</li>
                <li>Do: 10:00 – 20:00</li>
                <li>Vr: 10:00 – 19:00</li>
                <li>Za: 10:00 – 18:00</li>
                <li>Zo: Gesloten</li>
                <li className="mt-4">
                  Tel:{" "}
                  <a href="tel:0630717774" className="underline">
                    06 307 17774
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nl.butterfly@hotmail.com"
                    className="underline"
                  >
                    nl.butterfly@hotmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nl.fourseasons@gmail.com"
                    className="underline"
                  >
                    nl.fourseasons@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="flex text-xs text-gray-500 w-full justify-end bg-black p-5">
        Powered by
        <Link href={"/"}>
          <Image
            src={matp}
            width={18}
            height={18}
            alt="logo"
            className="ml-2"
          />
        </Link>
      </div> */}
    </>
  )
}

export default Footer
