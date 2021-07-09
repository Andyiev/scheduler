export function getAppointmentsForDay(state, day) {

  const result = [];
  if (!day) {
    return result;
  }

  if (state.days.length === 0) {
    return result;
  }


let appointmentNumbers;

  for (let dayFromDays of state.days) {
    if (day === dayFromDays.name) {
       appointmentNumbers = [...dayFromDays.appointments];
    }
  }

  if(!appointmentNumbers) {
    return result;
  }

  for (let number of appointmentNumbers) {
    result.push(state.appointments[number]);
  }

  return result;
}

export function getInterview(state, interview) {
  
  if (!interview) {
    return null;
  } else {
    const student = interview.student;
    const interviewer = state.interviewers[interview.interviewer]

    return { student, interviewer };
  }
  
}