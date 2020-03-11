import { FETCH } from './actionTypes';

//Todos
export function fetchTodoListStart(page) {
  console.log(page);
  return {
    type: FETCH.TODOLIST.START,
    page,
  }
}
export function fetchTodoListSuccess(todoResults) {
  return {
    type: FETCH.TODOLIST.SUCCESS,
    todoResults,
  }
}
export function fetchTodoListFailure(error) {
  return {
    type: FETCH.TODOLIST.FAILURE,
    error,
  }
}
