
import React from 'react';
// workoutDetailscomponent, taks the workout being mapped and use it as props for each component rendered with different workout data.

const WorkoutDetails = ({ workout }) => {

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails