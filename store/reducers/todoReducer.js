import { FETCH } from '../actions/actionTypes';

const initialState = {
  todoResults: [],
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
    default:
      return state;
  }
}
