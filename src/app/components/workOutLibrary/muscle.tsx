import React from 'react'
interface MuscleProps{
     muscleGroups:string
}
const Muscle = ( {muscleGroups}:MuscleProps) => {
  return (
    <span className="inline-flex items-center rounded-full bg-(--navBarbtnback) px-2.5 py-1 text-xs font-medium uppercase text-(--themecolor)">{muscleGroups}</span>
  )
}

export default Muscle