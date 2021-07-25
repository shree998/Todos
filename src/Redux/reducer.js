import { initialState } from "./initial-state";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_IMPORTANT } from "./actions";
import shortid from "shortid";

function storeTodosLocally(state) {
window.localStorage.setItem("TODOS", JSON.stringify(state));
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: shortid(),
            title,
            completed: false,
            important: false,
          },
        ],
      };
      storeTodosLocally(newState);
      return newState;
    }

    case TOGGLE_TODO: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      const newState = {
        ...state,
        todos: newTodos,
      };
      storeTodosLocally(newState);
      return newState;
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      const newState = {
        ...state,
        todos: newTodos,
      };
      storeTodosLocally(newState);
      return newState;
    }

    case TOGGLE_IMPORTANT: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      const newState = {
        ...state,
        todos: newTodos,
      };
      storeTodosLocally(newState);
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
