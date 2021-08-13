import { combineReducers } from 'redux';
import github from './github';
import { githubSaga } from './github';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
  github
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}