import { WorkoutType } from '@/app/types/workoutType'

interface WorkoutChartProps{
    workout:WorkoutType
}

const workoutChart = ({workout}:WorkoutChartProps) => {
  const details = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: `${workout.rating}/5` },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
      {details.map((item, index) => (
        <div
          key={item.label}
          className={`grid grid-cols-[1fr_auto] items-center gap-3 px-3 py-2.5 ${
            index !== details.length - 1 ? "border-b border-(--border)" : ""
          }`}
        >
          <span className="text-[11px] font-medium uppercase tracking-wide text-(--muted) sm:text-xs">
            {item.label}
          </span>

          <span className="text-right text-sm font-normal text-(--foreground) sm:text-[15px]">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default workoutChart