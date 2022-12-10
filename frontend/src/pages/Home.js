import React, { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {

    const [workouts, setWorkouts] = useState(null);
  useEffect(() => {

    const fetchWorkouts = async () => {

      const response = await fetch("/workouts");
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
      }
    };

    fetchWorkouts();
  }, []);

  return(
     <div className="home">
        <div className="workout">
            {workouts && workouts.map((workoutData) =>(
                // we pass the individual workout as property to the comonent created and an ID of the workout 
             
                  <WorkoutDetails workout={workoutData} key={workoutData._id} />
                       
                  
                )
            )}
        </div>
     </div>);
}

export default Home;
