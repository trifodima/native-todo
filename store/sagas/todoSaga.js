import { takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import {
  fetchTodoListSuccess, fetchTodoListFailure,
} from '../actions/todoActions';
import { FETCH } from '../actions/actionTypes';

function* fetchTodoList(action) {
  // console.log('limit = ',  action);
  console.log('action = ', action);

  try {
    const response = yield call(axios, {
      method: 'GET',
      url: `/list`,
      // params: {
      //   page: action.page
      // }
    });
    const todoResults = response.data.results;
    console.log('todoResults = ', todoResults);

    yield put(fetchTodoListSuccess(todoResults));
  } catch (error) {
    yield put(fetchTodoListFailure(error));
  }
}

export default function* () {
  yield takeLatest(FETCH.TODOLIST.START, fetchTodoList);
}
