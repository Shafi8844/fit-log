import { WorkoutType } from "@/app/types/workoutType"
import Image from "next/image";
import Muscle from "./muscle";
import { oswald } from "../sharedComponents/Navbar/navBar";
import Clock from '../../../../public/clock.png'
import Burn from '../../../../public/burn.png'
import Star from '../../../../public/star.png'

interface WorkoutCardProps{
    workout:WorkoutType;
}
const workoutCard = ({workout}:WorkoutCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image src={workout.image} alt={workout.name} width={740} height={20} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {
        workout.muscleGroups.map(item=><Muscle key={item} muscleGroups={item}></Muscle>)
      }
    </h2>
    <h1 className={`${oswald.className} text-2xl font-bold`}>
        {workout.name}
    </h1>
    <p>
        {workout.equipment}
    </p>
    <hr className="border-t border-gray-300" />
    <div className="flex gap-3 mt-1.5">
      <div className="flex gap-2 items-center">
      <Image src={Clock} alt="time" width={20}></Image>
      <p>{`${workout.duration} min`}</p>
    </div>
    <div className="flex gap-2 items-center">
      <Image src={Burn} alt="burn" width={20}></Image>
      <p>{`${workout.caloriesBurned} kcl`}</p>
    </div>
    <div className="flex gap-2 items-center">
      <Image src={Star} alt="rating" width={20}></Image>
      <p>{`${workout.rating}`}</p>
    </div>
    </div>
  </div>
</div>
  )
}

export default workoutCard