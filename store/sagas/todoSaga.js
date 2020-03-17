import { takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import {
  fetchTodoListSuccess,
  fetchTodoListFailure,
  fetchCreateTodoSuccess,
  fetchCreateTodoFailure,
  fetchRemoveTodoSuccess,
  fetchRemoveTodoFailure,
  fetchEditTodoSuccess,
  fetchEditTodoFailure,
} from '../actions/todoActions';
import { FETCH } from '../actions/actionTypes';



function* fetchTodoList(action) {
  try {
    const response = yield call(axios, {
      method: 'GET',
      url: `/todos`,
      params: {
        page: action.page
      }
    });
    const todoResults = response.data.results;

    yield put(fetchTodoListSuccess(todoResults));
  } catch (error) {
    yield put(fetchTodoListFailure(error));
  }
}
function* fetchFilteredTodoList(action) {
  console.log('1.action.page = ', action.page);

  try {
    const response = yield call(axios, {
      method: 'GET',
      url: `/filtered-todos`,
      params: {
        page: action.page,
        filter: action.filter
      }
    });
    const todoResults = response.data.results;
    console.log('2.action.page = ', todoResults);
    yield put(fetchTodoListSuccess(todoResults));
  } catch (error) {
    yield put(fetchTodoListFailure(error));
  }
}
function* fetchCreateTodo(action) {
  try {
    const response = yield call(axios, {
      method: 'POST',
      url: `/todo/create`,
      data: {
        title: action.title,
      }
    });
    const newTodo = response.data.results;

    yield put(fetchCreateTodoSuccess(newTodo));
  } catch (error) {
    yield put(fetchCreateTodoFailure(error));
  }
}
function* fetchEditTodo({id, title, completed}) {
  try {
    const response = yield call(axios, {
      method: 'PATCH',
      url: `/todo/${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        title,
        completed,
      },
    });
    const updatedTodo = response.data.results;

    yield put(fetchEditTodoSuccess(updatedTodo));
  } catch (error) {
    yield put(fetchEditTodoFailure(error));
  }
}
function* fetchRemoveTodo({id}) {
  try {
    const response = yield call(axios, {
      method: 'DELETE',
      url: `/todo/${id}`,
    });
    yield put(fetchRemoveTodoSuccess(id));
  } catch (error) {
    yield put(fetchRemoveTodoFailure(error));
  }
}

export default function* () {
  yield takeLatest(FETCH.TODOLIST.START, fetchTodoList);
  yield takeLatest(FETCH.CREATE_TODO.START, fetchCreateTodo);
  yield takeLatest(FETCH.EDIT_TODO.START, fetchEditTodo);
  yield takeLatest(FETCH.REMOVE_TODO.START, fetchRemoveTodo);
  yield takeLatest(FETCH.FILTERED_TODOLIST.START, fetchFilteredTodoList);
}
