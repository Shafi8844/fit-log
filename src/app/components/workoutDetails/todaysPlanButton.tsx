'use client'
import { WorkoutContext } from '@/app/context/workoutContext'
import { WorkoutType } from '@/app/types/workoutType'
import { useContext } from 'react'

interface TodaysPlanButtonProps{
    workout:WorkoutType
}

const TodaysPlanButton = ({workout}:TodaysPlanButtonProps) => {
    const {todaysPlan,setTodaysPlan,notify}= useContext(WorkoutContext);
    const alreadyPlanned = todaysPlan.some((item) => item.id === workout.id)
    const isFull = todaysPlan.length >= 5

    const handleTodaysPlan=()=>{
        if (alreadyPlanned) {
            notify('Workout is already in today’s plan')
            return
        }
        if (isFull) {
            notify('Today’s plan is full')
            return
        }
        setTodaysPlan((current) => [...current,workout])
        notify('Added to today’s plan')
    }
  return (
    <button type="button" disabled={alreadyPlanned || isFull} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-(--themecolor) px-5 font-semibold text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-50" onClick={handleTodaysPlan}>
      <span aria-hidden="true">+</span>{alreadyPlanned ? 'Already in today’s plan' : isFull ? 'Plan is full' : 'Add to today’s plan'}
    </button>
  )
}

export default TodaysPlanButton