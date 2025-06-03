import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronLeft, Loader2 } from "lucide-react"

type FormDataType = {
  service: string
  barber: string
  date: Date
  time: string
  name: string
  email: string
  phone: string
}

interface Props {
  data: FormDataType
  onBack: () => void
  onSubmit: () => Promise<void> // make sure the parent function returns a Promise
}

export const Step6_Confirm = ({ data, onBack, onSubmit }: Props) => {
  const { service, barber, date, time, email, phone, name } = data
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await onSubmit()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h3 className="text-sm font-light text-gray-800 mb-3">
        Bevestig uw afspraak
      </h3>

      <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-6 min-h-96">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700">
          <div>
            <dt className="font-light text-gray-400">Type afspraak</dt>
            <dd className="mt-1 text-gray-900">{service || "-"}</dd>
          </div>
          <div>
            <dt className="font-light text-gray-400">Medewerker</dt>
            <dd className="mt-1 text-gray-900">{barber || "-"}</dd>
          </div>
          <div>
            <dt className="font-light text-gray-400">Datum & tijd</dt>
            <dd className="mt-1 text-gray-900">
              {date ? date.toLocaleDateString("nl-NL") : "-"} {time || "-"}
            </dd>
          </div>
          <div>
            <dt className="font-light text-gray-400">Naam</dt>
            <dd className="mt-1 text-gray-900">{name || "-"}</dd>
          </div>
          <div>
            <dt className="font-light text-gray-400">E-mail</dt>
            <dd className="mt-1 text-gray-900">{email || "-"}</dd>
          </div>
          <div>
            <dt className="font-light text-gray-400">Telefoonnummer</dt>
            <dd className="mt-1 text-gray-900">{phone || "-"}</dd>
          </div>
        </dl>
      </div>

      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          onClick={onBack}
          className="bg-white border hover:bg-gray-100 rounded"
        >
          <ChevronLeft className="mr-1" />
          Wijzigen
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="hover:bg-pink-600 bg-[#e9207e] text-white rounded"
        >
          Verzenden
          {isSubmitting ? (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            <Check className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}
