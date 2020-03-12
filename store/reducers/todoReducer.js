import { FETCH } from '../actions/actionTypes';

const initialState = {
  todoResults: {},
  loading: false,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH.TODOLIST.START:
      return {
        ...state, loading: true
      };
    case FETCH.TODOLIST.SUCCESS:
      return {
        ...state,
        todoResults: action.todoResults,
        loading: false,
      };
    case FETCH.TODOLIST.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH.CREATE_TODO.START:
      return {
        ...state,
        // loading: true
      };
    case FETCH.CREATE_TODO.SUCCESS:
      const todoListWithNewTodo = [...state.todoResults.data];

      todoListWithNewTodo.push(action.todo);

      return {
        ...state,
        todoResults: {
          ...state.todoResults,
          data: todoListWithNewTodo
        },
        loading: false,
      };
    case FETCH.CREATE_TODO.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH.EDIT_TODO.START:
      return {
        ...state,
        // loading: true
      };
    case FETCH.EDIT_TODO.SUCCESS:
      const updatedTodoList = [...state.todoResults.data];

      updatedTodoList.map(todo => {
        if (todo.id === action.todo.id)  {

          todo.title = action.title;
          todo.completed = action.completed;
        }
        return todo;
      });

      return {
        ...state,
        todoResults: {
          ...state.todoResults,
          data: updatedTodoList,
        },
        // loading: false,
      };
    case FETCH.EDIT_TODO.ERROR:
      return {
        ...state,
        // loading: false,
        error: action.error
      };
    case FETCH.REMOVE_TODO.START:
      return {
        ...state,
        // loading: true
      };
    case FETCH.REMOVE_TODO.SUCCESS:
      const todoListWithoutTodo = [...state.todoResults.data].filter(todo => todo.id !== action.id);

      return {
        ...state,
        todoResults: {
          ...state.todoResults,
          data: todoListWithoutTodo
        },
        // loading: false,
      };
    case FETCH.REMOVE_TODO.ERROR:
      return {
        ...state,
        // loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
