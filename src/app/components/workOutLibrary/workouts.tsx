import { WorkoutType } from "@/app/types/workoutType";
import { oswald } from "@/app/fonts";
import WorkoutCard from "./workoutCard";


const workoutsPromise=async():Promise<WorkoutType[]>=>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
        if (!res.ok) throw new Error('Workout library request failed')
     return await res.json();
}
const Workouts =async () => {
        let data: WorkoutType[] = []
        try {
                data = await workoutsPromise()
        } catch {
                data = []
        }
  return (
        <section id="library" className="mx-auto my-10 w-full max-w-6xl scroll-mt-8 px-4 pb-8 sm:px-6">
            <header className="mb-6">
                <h2 className={`${oswald.className} text-2xl font-bold sm:text-3xl`}>THE LIBRARY</h2>
                <p className="mt-1 text-sm text-(--muted) sm:text-base">Twelve lifts covering every major muscle group.</p>
            </header>
            {data.length ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => <WorkoutCard key={item.id} workout={item} />)}
                </div>
            ) : (
                <div role="status" className="rounded-xl border border-(--border) bg-(--surface) px-5 py-8 text-sm text-(--muted)">
                    The workout library is unavailable right now. Refresh the page to try again.
                </div>
            )}
        </section>
  )
}

export default Workouts