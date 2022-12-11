import React, { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext();

//> reducer function:
//   to update the state we call the dispatch functionand we put an object that has a type property that describes the state we want to update
//   the second  is the payload that has any data we need to make the change
//   both arguments are called the ACTION
//     dispatch({
//       type: "GET_ALL_WORKOUTS",
//       payload: [{}, {}],
//     });

// the reducer function
// we start with the previous value. the action is the type and the payload
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        workouts: [action.payload, ...state.workouts] 
      }
    case 'DELETE_WORKOUT':
      return { 
        // returns the workouts without the one we want to delete by id
        workouts: state.workouts.filter(workout => workout._id !== action.payload._id) 
      }
    default:
      return state
  }
}
// the props children are all the components the WorkoutContextProvider wraps
export const WorkoutsContextProvider = ({ children }) => {
    //first param is the reducer function and second param is the initial value of the component state

  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}