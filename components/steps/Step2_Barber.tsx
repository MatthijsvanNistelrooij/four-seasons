import { Button } from "@/components/ui/button"
import { RadioGroup } from "@/components/ui/radio-group"
import { useState } from "react"
import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  value: string
  onChange: (value: string) => void
  onNext: () => void
  onBack: () => void
}

const barbers = [
  { name: "Geen voorkeur" },
  { name: "Botros" },
  { name: "Olga" },
]

export const Step2_Barber = ({ value, onChange, onNext, onBack }: Props) => {
  const [error, setError] = useState("")

  const handleNext = () => {
    if (!value) {
      setError("Selecteer een barbier om verder te gaan.")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="">
      <div>
        <h3 className="text-sm font-light text-gray-700 mb-3">
          Heeft u een voorkeur voor een medewerker?
        </h3>

        <RadioGroup
          value={value}
          onValueChange={onChange}
          className="flex flex-col overflow-y-auto bg-gray-50 min-h-96 gap-0 text-sm font-bold border border-gray-200"
        >
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className={clsx(
                "w-full border-b border-gray-200 rounded-md px-4 py-2 flex items-center justify-start text-sm font-medium cursor-pointer transition",
                value === barber.name
                  ? "bg-blue-500 text-white border-blue-100"
                  : "hover:bg-blue-50"
              )}
              onClick={() => onChange(barber.name)}
            >
              <div className="p-5 bg-gray-200 rounded mr-4" />
              <span className="mb-5">{barber.name}</span>
            </div>
          ))}
        </RadioGroup>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          onClick={onBack}
          className="bg-white border hover:bg-gray-200 hover:border-gray-300 rounded"
        >
          <ChevronLeft />
          Terug
        </Button>
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
