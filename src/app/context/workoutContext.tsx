'use client'
import React, { createContext, useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import { WorkoutType } from '../types/workoutType'

interface WorkoutContextValue {
  todaysPlan: WorkoutType[]
  setTodaysPlan: Dispatch<SetStateAction<WorkoutType[]>>
  savedPlan: WorkoutType[]
  setSavedPlan: Dispatch<SetStateAction<WorkoutType[]>>
  isHydrated: boolean
  notify: (message: string) => void
}

export const WorkoutContext = createContext<WorkoutContextValue>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
  isHydrated: false,
  notify: () => {},
});

const WorkoutProvider = ({children}:{children:React.ReactNode}) => {
    const [todaysPlan,setTodaysPlan]=useState<WorkoutType[]>([])
    const [savedPlan,setSavedPlan]=useState<WorkoutType[]>([])
  const [isHydrated, setIsHydrated] = useState(false)
  const [toast, setToast] = useState('')
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let restoredPlans: { todaysPlan?: WorkoutType[]; savedPlan?: WorkoutType[] } = {}
    try {
      const stored = localStorage.getItem('fitlog-workout-plan')
      if (stored) {
        const parsed: unknown = JSON.parse(stored)
        if (parsed && typeof parsed === 'object') {
          const plans = parsed as { todaysPlan?: unknown; savedPlan?: unknown }
          restoredPlans = {
            todaysPlan: Array.isArray(plans.todaysPlan) ? plans.todaysPlan as WorkoutType[] : [],
            savedPlan: Array.isArray(plans.savedPlan) ? plans.savedPlan as WorkoutType[] : [],
          }
        }
      }
    } catch {
      try {
        localStorage.removeItem('fitlog-workout-plan')
      } catch {}
    }

    queueMicrotask(() => {
      if (restoredPlans.todaysPlan) setTodaysPlan(restoredPlans.todaysPlan)
      if (restoredPlans.savedPlan) setSavedPlan(restoredPlans.savedPlan)
      setIsHydrated(true)
    })
  }, [])

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem('fitlog-workout-plan', JSON.stringify({ todaysPlan, savedPlan }))
      } catch {}
    }
  }, [isHydrated, todaysPlan, savedPlan])

  useEffect(() => () => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
  }, [])

  const notify = (message: string) => {
    setToast(message)
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
    toastTimeout.current = setTimeout(() => setToast(''), 2600)
  }

    const sharedData={
        todaysPlan,
        setTodaysPlan,
        savedPlan,
    setSavedPlan,
    isHydrated,
    notify,
    }
  return (
  <WorkoutContext.Provider value={sharedData}>
    {children}
    <div aria-live="polite" className={`fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-lg border border-(--border) bg-(--surface) px-4 py-3 text-sm shadow-xl transition-all ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}>
      {toast}
    </div>
  </WorkoutContext.Provider>
  )
}

export default WorkoutProvider