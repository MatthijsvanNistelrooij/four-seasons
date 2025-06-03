import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { ChevronRight } from "lucide-react"

type Props = {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

const services = [
  { name: "Heren knippen", price: "€ 28,50", category: "knippen" },
  { name: "Dames kort haar knippen", price: "€ 28,50", category: "knippen" },
  {
    name: "Dames half-lang haar knippen",
    price: "€ 32,50",
    category: "knippen",
  },
  { name: "Dames lang haar knippen", price: "€ 37,50", category: "knippen" },

  { name: "Huidverzorging", price: "€45,00", category: "huidverzorging" },
  {
    name: "Vacuüm gezichtsreiniging",
    price: "€50,00",
    category: "huidverzorging",
  },
  {
    name: "SOS schoonheidsprocedures",
    price: "€55,00",
    category: "huidverzorging",
  },
  { name: "Darsonval", price: "€40,00", category: "huidverzorging" },
  {
    name: "Liftende gezichtsmassage",
    price: "€60,00",
    category: "huidverzorging",
  },
  {
    name: "Sculpturale gezichtsmassage",
    price: "€65,00",
    category: "huidverzorging",
  },
  {
    name: "Anti-aging gezichtsmassage",
    price: "€70,00",
    category: "huidverzorging",
  },
  { name: "Pellen", price: "€35,00", category: "huidverzorging" },
  { name: "Manicuristische diensten", price: "€40,00", category: "manicure" },
  { name: "Correctie van nagelcoating", price: "€30,00", category: "manicure" },
  { name: "Basismanicure", price: "€25,00", category: "manicure" },
  { name: "Franse manicure", price: "€30,00", category: "manicure" },
  { name: "Spa manicure", price: "€45,00", category: "manicure" },
  { name: "Lak en biab-coating", price: "€50,00", category: "manicure" },
  { name: "Nagel ontwerp", price: "€35,00", category: "manicure" },
]

export const Step1_Service = ({ value, onChange, onNext }: Props) => {
  const [error, setError] = useState("")
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const el = listRef.current
    if (!el) return

    setAtTop(el.scrollTop === 0)
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 1)
  }

  useEffect(() => {
    const el = listRef.current
    if (!el) return

    handleScroll() // Initialize once
    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNext = () => {
    if (!value) {
      setError("Selecteer een dienst om verder te gaan.")
      return
    }
    setError("")
    onNext()
  }

  // Filter services per categorie
  const knippen = services.filter((s) => s.category === "knippen")
  const huidverzorging = services.filter((s) => s.category === "huidverzorging")
  const manicure = services.filter((s) => s.category === "manicure")

  return (
    <div>
      <h3 className="mb-3 text-sm font-light">
        Voor welke behandeling wilt u een afspraak maken?
      </h3>
      <div className="relative overflow-y-auto rounded bg-gray-50 border border-gray-200">
        <div ref={listRef} className="overflow-y-auto max-h-96">
          {/* Knippen */}
          <div>
            <h4 className="px-4 py-2 font-semibold text-gray-500 mt-3 border-b border-gray-200 flex justify-center">
              Knippen
            </h4>
            {knippen.map((service) => (
              <div
                key={service.name}
                onClick={() => onChange(service.name)}
                className={clsx(
                  "w-full border-b border-gray-200 px-4 py-3 flex justify-between items-center cursor-pointer transition text-gray-700 text-sm font-medium",
                  value === service.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50"
                )}
              >
                <span>{service.name}</span>
                <span className="text-sm">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="my-6" />

          {/* Huidverzorging */}
          <div>
            <h4 className="px-4 py-2 font-semibold text-gray-500 border-b border-gray-200 flex justify-center">
              Huidverzorging
            </h4>
            {huidverzorging.map((service) => (
              <div
                key={service.name}
                onClick={() => onChange(service.name)}
                className={clsx(
                  "w-full border-b border-gray-200 px-4 py-3 flex justify-between items-center cursor-pointer transition text-gray-700 text-sm font-medium",
                  value === service.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50"
                )}
              >
                <span>{service.name}</span>
                <span className="text-sm">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="my-6" />

          {/* Manicure */}
          <div>
            <h4 className="px-4 py-2 font-semibold text-gray-500 border-b border-gray-200 flex justify-center">
              Manicure
            </h4>
            {manicure.map((service) => (
              <div
                key={service.name}
                onClick={() => onChange(service.name)}
                className={clsx(
                  "w-full border-b border-gray-200 px-4 py-3 flex justify-between items-center cursor-pointer transition text-gray-700 text-sm font-medium",
                  value === service.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50"
                )}
              >
                <span>{service.name}</span>
                <span className="text-sm">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {!atTop && (
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-200 to-transparent pointer-events-none z-10" />
        )}

        {!atBottom && (
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none z-10" />
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

      <div className="mt-6 flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!value}
          className="hover:bg-blue-600 bg-blue-500 text-white rounded"
        >
          Volgende
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
