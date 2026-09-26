import { WorkoutType } from "@/app/types/workoutType"
import Image from "next/image";
import Muscle from "./muscle";
import { oswald } from "@/app/fonts";
import Clock from '../../../../public/clock.png'
import Burn from '../../../../public/burn.png'
import Star from '../../../../public/star.png'
import Link from "next/link";

interface WorkoutCardProps{
    workout:WorkoutType;
}
const workoutCard = ({workout}:WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="group block h-full overflow-hidden rounded-xl border border-(--border) bg-(--surface) transition-colors hover:border-[#454c5b]">
      <figure className="relative aspect-[16/10] overflow-hidden bg-[#1b1f27]">
        <Image src={workout.image} alt={workout.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </figure>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map(item=><Muscle key={item} muscleGroups={item} />)}
        </div>
        <h3 className={`${oswald.className} mt-3 text-xl font-bold leading-tight sm:text-2xl`}>
          {workout.name}
        </h3>
        <p className="mt-1 text-sm text-(--muted)">{workout.equipment}</p>
        <hr className="my-4 border-(--border)" />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-(--muted)">
          <span className="flex items-center gap-1.5"><Image src={Clock} alt="" width={16} height={16} />{workout.duration} min</span>
          <span className="flex items-center gap-1.5"><Image src={Burn} alt="" width={16} height={16} />{workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1.5"><Image src={Star} alt="" width={16} height={16} />{workout.rating}</span>
        </div>
      </div>
    </Link>
  )
}

export default workoutCard