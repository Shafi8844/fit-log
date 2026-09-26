import { oswald } from '../fonts'

interface PlanSummaryProps {
  exercises: number
  minutes: number
  calories: number
}

const PlanSummary = ({ exercises, minutes, calories }: PlanSummaryProps) => (
  <section aria-label="Today's plan summary" className="grid grid-cols-3 rounded-xl border border-(--border) bg-(--surface) px-4 py-5 sm:px-6 sm:py-7">
    <div className="border-r border-(--border) pr-3 sm:pl-1">
      <p className="text-xs text-(--muted) sm:text-sm">Exercises</p>
      <p className={`${oswald.className} mt-1 text-3xl font-bold text-(--themecolor) sm:text-4xl`}>{exercises}</p>
    </div>
    <div className="border-r border-(--border) px-3 sm:px-6">
      <p className="text-xs text-(--muted) sm:text-sm">Minutes</p>
      <p className={`${oswald.className} mt-1 text-3xl font-bold sm:text-4xl`}>{minutes}</p>
    </div>
    <div className="pl-3 sm:pl-6">
      <p className="text-xs text-(--muted) sm:text-sm">Calories</p>
      <p className={`${oswald.className} mt-1 text-3xl font-bold sm:text-4xl`}>{calories}</p>
    </div>
  </section>
)

export default PlanSummary