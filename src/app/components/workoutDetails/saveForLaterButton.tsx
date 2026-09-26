'use client'
import { WorkoutContext } from '@/app/context/workoutContext';
import { WorkoutType } from '@/app/types/workoutType'
import { useContext } from 'react';

interface saveForLaterButtonProps{
    workout:WorkoutType;
} 
const SaveForLaterButton = ({workout}:saveForLaterButtonProps) => {
    const {savedPlan,setSavedPlan,notify}=useContext(WorkoutContext);
    const alreadySaved = savedPlan.some((item) => item.id === workout.id)


    const saveForLaterHandle=()=>{
      if (alreadySaved) {
        notify('Workout is already saved')
        return
      }
      setSavedPlan((current) => [...current,workout])
      notify('Saved for later')
    }
  return (
    <button type="button" disabled={alreadySaved} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-(--border) px-5 transition-colors hover:border-(--themecolor) disabled:cursor-not-allowed disabled:opacity-50" onClick={saveForLaterHandle}>
      <span aria-hidden="true">☆</span>{alreadySaved ? 'Saved' : 'Save for later'}
    </button>
  )
}

export default SaveForLaterButton