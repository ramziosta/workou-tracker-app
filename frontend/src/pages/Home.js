import React, { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/UseWorkoutsContext";

function Home() {
  //   const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/workouts");
      const data = await response.json();
      if (response.ok) {
        // setWorkouts(data);
        dispatch({
          type: "SET_WORKOUTS",
          payload: data,
        });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workout">
        {workouts &&
          workouts.map((workoutData) => (
            // we pass the individual workout as property to the comonent created and an ID of the workout
            <WorkoutDetails workout={workoutData} key={workoutData._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
