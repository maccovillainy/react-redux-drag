import { createStore, combineReducers, applyMiddleware } from 'redux'
import  logger  from 'redux-logger';
import board from './reducers/board';
import task from './reducers/tasks';

export default createStore(combineReducers({
  task,
  board
}),
{},
applyMiddleware(logger()));