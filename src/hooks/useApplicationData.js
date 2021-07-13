import { useState, useEffect } from "react";
import axios from "axios";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
    .then((all) => {
      setState(prev => ({ ...prev,days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
    .catch(err => console.log(err))
  }, []);

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    console.log(state.days);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    for (let day of [...state.days]) {
      if (day.appointments.includes(id)) {
        console.log("This is id", id);
        console.log("This is day.appointments", day.appointments);
        console.log("This day.spots before", day.spots);
        day.spots -= 1;
        console.log("This day.spots after", day.spots);
      }
    }
    return axios.put(`/api/appointments/${id}`, appointment)
    .then(res => setState({...state, appointments}));
   
  }

  function cancelInterview(id) {
    for (let day of [...state.days]) {
      if (day.appointments.includes(id)) {
        day.spots += 1
      }
    }
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    
    return axios.delete(`/api/appointments/${id}`, { interview: null })
    .then(res => setState(prev => ({...prev, appointments: {...prev.appointments, [id]: appointment}})))
  }
  return{ state, setDay, bookInterview, cancelInterview }
} 