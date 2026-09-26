'use client'

import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { WorkoutContext } from '../context/workoutContext'
import { WorkoutType } from '../types/workoutType'
import { oswald } from '../fonts'
import PlanCard from '../components/myplan/planCard'
import PlanSummary from './planSummary'
import PlanControls, { PlanTab, SortOption } from './planControls'

const MyPlanPage = () => {
  const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan, isHydrated, notify } = useContext(WorkoutContext)
  const [activeTab, setActiveTab] = useState<PlanTab>('today')
  const [sortOption, setSortOption] = useState<SortOption>('duration')
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set())
  const visibleWorkouts = activeTab === 'today' ? todaysPlan : savedPlan
  const sortedWorkouts = [...visibleWorkouts].sort((left, right) => left[sortOption] - right[sortOption])
  const totalMinutes = todaysPlan.reduce((total, workout) => total + workout.duration, 0)
  const totalCalories = todaysPlan.reduce((total, workout) => total + workout.caloriesBurned, 0)

  const removeWorkout = (workout: WorkoutType) => {
    if (activeTab === 'today') {
      setTodaysPlan((current) => current.filter((item) => item.id !== workout.id))
    } else {
      setSavedPlan((current) => current.filter((item) => item.id !== workout.id))
    }
    notify('Workout removed')
  }

  const addToToday = (workout: WorkoutType) => {
    if (todaysPlan.length >= 5) {
      notify('Today’s plan is full')
      return
    }
    if (todaysPlan.some((item) => item.id === workout.id)) {
      notify('Workout is already in today’s plan')
      return
    }
    setTodaysPlan((current) => [...current, workout])
    notify('Added to today’s plan')
  }

  const markAsDone = (workout: WorkoutType) => {
    setCompletedIds((current) => new Set(current).add(workout.id))
    notify(`${workout.name} marked as done`)
  }

  if (!isHydrated) {
    return (
      <main className="mx-auto my-8 w-full max-w-6xl px-4 pb-8 sm:my-10 sm:px-6">
        <p role="status" className="rounded-xl border border-(--border) bg-(--surface) px-5 py-8 text-sm text-(--muted)">Loading workouts…</p>
      </main>
    )
  }

  return (
    <main className="mx-auto my-8 w-full max-w-6xl pb-8 sm:my-10">
      <header className="mb-6">
        <h1 className={`${oswald.className} text-3xl font-bold tracking-wide sm:text-4xl`}>MY PLAN</h1>
        <p className="mt-1 text-sm text-(--muted) sm:text-base">Cap of five lifts for today. Finish them, then load more.</p>
      </header>

      <PlanSummary exercises={todaysPlan.length} minutes={totalMinutes} calories={totalCalories} />

      <PlanControls
        activeTab={activeTab}
        onTabChange={setActiveTab}
        todayCount={todaysPlan.length}
        savedCount={savedPlan.length}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {sortedWorkouts.length === 0 ? (
        <section className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-(--border) px-5 py-12 text-center sm:min-h-72">
          <h2 className={`${oswald.className} text-xl font-bold tracking-wide sm:text-2xl`}>NOTHING HERE YET</h2>
          <p className="mt-1 max-w-md text-sm text-(--muted)">
            {activeTab === 'saved' ? 'Browse the library and save a lift for later.' : 'Browse the library and add a lift to get today moving.'}
          </p>
          <Link href="/" className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-(--themecolor) px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.03]">
            Go to workouts
          </Link>
        </section>
      ) : (
        <ul className="divide-y divide-(--border) rounded-xl border border-(--border) bg-(--surface)">
          {sortedWorkouts.map((workout) => (
            <li key={workout.id}>
              <PlanCard
                workout={workout}
                saved={activeTab === 'saved'}
                completed={completedIds.has(workout.id)}
                canAddToToday={todaysPlan.length < 5 && !todaysPlan.some((item) => item.id === workout.id)}
                onAddToToday={() => addToToday(workout)}
                onMarkAsDone={() => markAsDone(workout)}
                onRemove={() => removeWorkout(workout)}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default MyPlanPage