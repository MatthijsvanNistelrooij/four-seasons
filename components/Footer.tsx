import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Logo section */}
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Links and info */}
        <div className="flex flex-col md:flex-row justify-end flex-1 gap-12">
          {/* Pagina’s */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pagina’s</h3>
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
            <h3 className="text-lg font-semibold mb-4">
              Openingstijden & Contact
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
                <a href="mailto:nl.butterfly@hotmail.com" className="underline">
                  nl.butterfly@hotmail.com
                </a>
              </li>
              <li>
                <a href="mailto:nl.fourseasons@gmail.com" className="underline">
                  nl.fourseasons@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
