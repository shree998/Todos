export const initialState = JSON.parse(window.localStorage.getItem("TODOS")) || { 
todos: [
  {
    id: 0,
    title: "Finish course",
    completed: false,
    important: true
  },
  {
    id: 1,
    title: "Complete API connections",
    completed: false,
    important: true
  },
  {
    id: 2,
    title: "Wake up early",
    completed: true,
    important: true
  },
  {
    id: 3,
    title: "Get vegetables",
    completed: false,
    important: false
  },
  {
    id: 4,
    title: "Send mail to Amuthu",
    completed: true,
    important: true
  }
]
};
