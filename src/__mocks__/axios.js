const fixtures = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2],
      interviewers: [1, 2],
      spots: 1
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [3, 4],
      interviewers: [3, 4],
      spots: 1
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": {
      id: 2,
      time: "1pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Leopold Silvers", interviewer: 4 }
    },
    "4": { id: 4, time: "3pm", interview: null }
  },
  interviewers: {
    "1": {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png"
    },
    "4": {
      id: 4,
      name: "Cohana Roy",
      avatar: "https://i.imgur.com/FK8V841.jpg"
    }
  }
};
// USING OBJECT REFERENCE
export default {
  defaults: { baseURL: "http://localhost:8001" },
  get: jest.fn(url => {
    const days = Promise.resolve({
      status: 200,
      statusText: "OK",
      data: fixtures.days
    });
    const appointments = Promise.resolve({
      status: 200,
      statusText: "OK",
      data: fixtures.appointments
    });
    const interviewers = Promise.resolve({
      status: 200,
      statusText: "OK",
      data: fixtures.interviewers
    });
    const response = {
      "/api/days": days,
      "/api/appointments": appointments,
      "/api/interviewers": interviewers
    };

    return response[url];
  }),
  put: jest.fn(() => {
    return Promise.resolve({
      status: 204,
      statusText: "No Content"
    });
  }),
  delete: jest.fn(() => {
    return Promise.resolve({
      status: 204,
      statusText: "No Content"
    });
  })
} 


