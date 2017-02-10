import { createStore, combineReducers, applyMiddleware } from 'redux'
import  logger  from 'redux-logger';
import Board from './reducers/board';
import Shape from './reducers/shape';

export default createStore(combineReducers({
  Shape,
  Board
}),
{},
applyMiddleware(logger()));