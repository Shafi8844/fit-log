import Link from 'next/link'
import { WorkoutType } from '../../types/workoutType'
import { oswald } from '../sharedComponents/Navbar/navBar'

interface PlanCardProps {
	workout: WorkoutType
	saved: boolean
	completed: boolean
	canAddToToday: boolean
	onAddToToday: () => void
	onMarkAsDone: () => void
	onRemove: () => void
}

const PlanCard = ({ workout, saved, completed, canAddToToday, onAddToToday, onMarkAsDone, onRemove }: PlanCardProps) => (
	<article className="flex flex-wrap items-center gap-4 p-4 sm:flex-nowrap sm:px-5">
		<div
			role="img"
			aria-label={workout.name}
			className="h-20 w-24 shrink-0 rounded-lg bg-cover bg-center sm:h-24 sm:w-32"
			style={{ backgroundImage: `linear-gradient(0deg, #0d0f1440, #0d0f1440), url("${workout.image}")` }}
		/>
		<div className="min-w-0 flex-1">
			<p className="text-xs text-(--themecolor)">{workout.muscleGroups.join(' · ')}</p>
			<h2 className={`${oswald.className} mt-1 text-xl font-semibold`}>{workout.name}</h2>
			<p className="mt-1 text-sm text-(--muted)">{workout.equipment}</p>
			<p className="mt-1 text-xs text-(--muted)">
				{workout.duration} min <span className="px-1.5">·</span> {workout.caloriesBurned} kcal <span className="px-1.5">·</span> ★ {workout.rating}
			</p>
		</div>
		<div className="ml-auto flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end">
			<Link href={`/workout/${workout.id}`} className="inline-flex min-h-10 items-center justify-center rounded-lg border border-(--border) px-4 text-sm transition-colors hover:border-(--themecolor)">
				View Details
			</Link>
			{saved ? (
				<button type="button" onClick={onAddToToday} disabled={!canAddToToday} className="min-h-10 rounded-lg bg-(--themecolor) px-4 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50">
					Add to plan
				</button>
			) : (
				<button type="button" onClick={onMarkAsDone} disabled={completed} className="min-h-10 rounded-lg border border-(--border) px-4 text-sm text-(--muted) transition-colors hover:text-white disabled:text-(--themecolor)">
					{completed ? '✓ Done' : '✓ Mark as Done'}
				</button>
			)}
			<button type="button" onClick={onRemove} aria-label={`Remove ${workout.name}`} title="Remove" className="min-h-10 min-w-10 rounded-lg border border-(--border) px-3 text-sm text-(--muted) transition-colors hover:border-red-400 hover:text-red-300">
				×
			</button>
		</div>
	</article>
)

export default PlanCard
