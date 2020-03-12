import { FETCH } from './actionTypes';

//TodoList
export function fetchTodoListStart(page) {
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
//CreateTodo
export function fetchCreateTodoStart(title) {
  return {
    type: FETCH.CREATE_TODO.START,
    title,
  }
}
export function fetchCreateTodoSuccess(todo) {
  return {
    type: FETCH.CREATE_TODO.SUCCESS,
    todo,
  }
}
export function fetchCreateTodoFailure(error) {
  return {
    type: FETCH.CREATE_TODO.FAILURE,
    error,
  }
}
//EditTodo
export function fetchEditTodoStart(id, title, completed) {
  return {
    type: FETCH.EDIT_TODO.START,
    id,
    title,
    completed,
  }
}
export function fetchEditTodoSuccess(todo) {
  return {
    type: FETCH.EDIT_TODO.SUCCESS,
    todo,
  }
}
export function fetchEditTodoFailure(error) {
  return {
    type: FETCH.EDIT_TODO.FAILURE,
    error,
  }
}
//RemoveTodo
export function fetchRemoveTodoStart(id) {
  return {
    type: FETCH.REMOVE_TODO.START,
    id,
  }
}
export function fetchRemoveTodoSuccess(id) {
  return {
    type: FETCH.REMOVE_TODO.SUCCESS,
    id,
  }
}
export function fetchRemoveTodoFailure(error) {
  return {
    type: FETCH.REMOVE_TODO.FAILURE,
    error,
  }
}
