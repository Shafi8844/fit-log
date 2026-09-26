import React from 'react'
interface MuscleProps{
     muscleGroups:string
}
const muscle = ( {muscleGroups}:MuscleProps) => {
  return (
    <div>
        <div className="badge bg-[var(--themecolor)] rounded-2xl text-black">{muscleGroups}</div>
    </div>
  )
}

export default muscle