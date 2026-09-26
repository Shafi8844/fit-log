import { WorkoutType } from "@/app/types/workoutType";
import { oswald } from "../sharedComponents/Navbar/navBar";
import WorkoutCard from "./workoutCard";


const workoutsPromise=async():Promise<WorkoutType[]>=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
     return await res.json();
}
const workouts =async () => {
    const data=await workoutsPromise();
  return (
    <div className="my-10 container mx-auto space-y-4">
        <div>
            <h1 className={`${oswald.className} text-2xl font-bold`}>THE LIBRARY</h1>
            <p>Twelve lifts covering every major muscle group</p>
            <div className="grid grid-cols-3 gap-5 mt-7">
                {
                    data.map(item=><WorkoutCard key={item.id} workout={item}></WorkoutCard>)
                }
            </div>
        </div>
    </div>
  )
}

export default workouts