import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { addDays, isSameDay, format } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { startOfWeek, endOfWeek, isWithinInterval, addWeeks } from "date-fns"
import { nl } from "date-fns/locale" // NL locale importeren

type Props = {
  date: Date | null
  onDateChange: (value: Date) => void
  onNext: () => void
  onBack: () => void
}

export const Step3_Date = ({ date, onDateChange, onNext, onBack }: Props) => {
  const [error, setError] = useState("")
  const [showTopShadow, setShowTopShadow] = useState(false)
  const [showBottomShadow, setShowBottomShadow] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const availableDates = Array.from({ length: 21 }, (_, i) =>
    addDays(new Date(), i)
  )

  const handleNext = () => {
    if (!date) {
      setError("Kies een datum om verder te gaan.")
      return
    }
    setError("")
    onNext()
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    setShowTopShadow(scrollTop > 0)
    setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 1)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  function groupDatesByWeek(dates: Date[]) {
    const now = new Date()

    const dezeWeekStart = now
    const dezeWeekEnd = endOfWeek(now, { weekStartsOn: 1 }) // zondag einde week, week start maandag

    const komendeWeekStart = addWeeks(startOfWeek(now, { weekStartsOn: 1 }), 1)
    const komendeWeekEnd = endOfWeek(komendeWeekStart, { weekStartsOn: 1 })

    const overTweeWeekStart = addWeeks(startOfWeek(now, { weekStartsOn: 1 }), 2)
    const overTweeWeekEnd = endOfWeek(overTweeWeekStart, { weekStartsOn: 1 })

    return {
      dezeWeek: dates.filter((d) =>
        isWithinInterval(d, { start: dezeWeekStart, end: dezeWeekEnd })
      ),
      komendeWeek: dates.filter((d) =>
        isWithinInterval(d, { start: komendeWeekStart, end: komendeWeekEnd })
      ),
      overTweeWeek: dates.filter((d) =>
        isWithinInterval(d, { start: overTweeWeekStart, end: overTweeWeekEnd })
      ),
    }
  }

  const groupedDates = groupDatesByWeek(availableDates)

  return (
    <div>
      <h3 className="text-sm font-light mb-3">Wanneer wilt u langskomen?</h3>
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-col max-h-96 overflow-y-auto space-y-5 bg-white text-sm font-semibold relative border"
        >
          {/* DEZE WEEK */}
          <div>
            <h4 className="text-xs pl-2 text-gray-500 font-light mb-3 mt-5">
              DEZE WEEK
            </h4>

            <div className="rounded-md overflow-hidden">
              {groupedDates.dezeWeek.length === 0 && (
                <p className="text-gray-400 ">Geen beschikbare dagen</p>
              )}
              {groupedDates.dezeWeek.map((d) => (
                <div
                  key={d.toDateString()}
                  className={`w-full border-b pl-4 text-gray-700 rounded-md py-3 cursor-pointer transition ${
                    date && isSameDay(date, d)
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-50"
                  }`}
                  onClick={() => onDateChange(d)}
                >
                  {format(d, "EEEE dd MMMM", { locale: nl })}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs pl-2 text-gray-500 font-light mb-3 mt-5">
              VOLGENDE WEEK
            </h4>
            <div className="rounded-md overflow-hidden">
              {groupedDates.komendeWeek.length === 0 && (
                <p className="text-gray-400">Geen beschikbare dagen</p>
              )}
              {groupedDates.komendeWeek.map((d) => (
                <div
                  key={d.toDateString()}
                  className={`w-full pl-4 border-b text-gray-700 rounded-md py-3 cursor-pointer transition ${
                    date && isSameDay(date, d)
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:bg-blue-50"
                  }`}
                  onClick={() => onDateChange(d)}
                >
                  {format(d, "EEEE dd MMMM", { locale: nl })}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs pl-2 text-gray-500 font-light mb-3 mt-5">
              OVER TWEE WEKEN
            </h4>
            {groupedDates.overTweeWeek.length === 0 && (
              <p className="text-gray-400">Geen beschikbare dagen</p>
            )}
            <div className="rounded-md overflow-hidden">
              {groupedDates.overTweeWeek.map((d) => (
                <div
                  key={d.toDateString()}
                  className={`w-full pl-4 border-b text-gray-700 rounded-md py-3 cursor-pointer transition ${
                    date && isSameDay(date, d)
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:bg-blue-50"
                  }`}
                  onClick={() => onDateChange(d)}
                >
                  {format(d, "EEEE dd MMMM", { locale: nl })}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Shadows */}
        {showTopShadow && (
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-200 to-transparent pointer-events-none" />
        )}
        {showBottomShadow && (
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none" />
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
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
          disabled={!date}
          className="hover:bg-blue-600 bg-blue-500 text-white rounded"
        >
          Volgende
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
