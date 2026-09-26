import Image from 'next/image'
import { WorkoutType } from '@/app/types/workoutType'
import Muscle from '@/app/components/workOutLibrary/muscle'
import { oswald } from '@/app/fonts'
import WorkoutChart from '@/app/components/workoutDetails/workoutChart'
import TodaysPlanButton from '@/app/components/workoutDetails/todaysPlanButton'
import SaveForLaterButton from '@/app/components/workoutDetails/saveForLaterButton'
import { notFound } from 'next/navigation'

interface WorkoutPageProps {
   params: Promise<{ id: string }>
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
   const { id: rawId } = await params
   const id = Number(rawId)
   if (!Number.isInteger(id) || id < 1) notFound()

   let response: Response
   try {
      response = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)
   } catch {
      notFound()
   }
   if (!response.ok) notFound()

   const workout: WorkoutType = await response.json()
   if (!workout?.id || !workout.name || !workout.image) notFound()

   return (
      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-7 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1fr_1fr] md:gap-10">
         <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-(--border) bg-(--surface) md:aspect-[4/5]">
            <Image src={workout.image} alt={workout.name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
         </div>
         <div className="min-w-0 space-y-6">
            <header>
               <h1 className={`${oswald.className} text-3xl font-bold leading-tight sm:text-4xl`}>{workout.name}</h1>
               <p className="mt-3 text-sm leading-6 text-(--muted) sm:text-base">{workout.description}</p>
               <div className="mt-4 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((item) => <Muscle key={item} muscleGroups={item} />)}
               </div>
            </header>

            <section aria-label="Workout specifications">
               <h2 className={`${oswald.className} mb-3 text-xl font-semibold`}>KEY SPECS</h2>
               <WorkoutChart workout={workout} />
            </section>

            <section>
               <h2 className={`${oswald.className} mb-3 text-xl font-semibold`}>INSTRUCTIONS</h2>
               <ol className="space-y-3">
                  {workout.instructions.map((item, index) => (
                     <li key={`${index}-${item}`} className="flex gap-3 text-sm leading-6 text-(--muted)">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-(--navBarbtnback) text-xs font-semibold text-(--themecolor)">{index + 1}</span>
                        <span>{item}</span>
                     </li>
                  ))}
               </ol>
            </section>

            <div className="flex flex-wrap gap-3">
               <TodaysPlanButton workout={workout} />
               <SaveForLaterButton workout={workout} />
            </div>
         </div>
      </main>
   )
}

export default WorkoutPage