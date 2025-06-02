// components/steps/Step6_Confirm.tsx

import { Button } from "@/components/ui/button"
import { Check, ChevronLeft } from "lucide-react"

type FormDataType = {
  service: string
  barber: string
  date: Date // Note date is Date type here
  time: string
  name: string
  email: string
  phone: string
}

interface Props {
  data: FormDataType
  onBack: () => void
  onSubmit: () => void
}

export const Step6_Confirm = ({ data, onBack, onSubmit }: Props) => {
  const { service, barber, date, time, email, phone, name } = data

  return (
    <div className="">
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
            <dt className="font-light text-gray-400">Name</dt>
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
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Verzenden
          <Check className="ml-1" />
        </Button>
      </div>
    </div>
  )
}
