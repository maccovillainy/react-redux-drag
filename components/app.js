import React from 'react';
import { connect } from 'react-redux';
import  { findDOMNode } from 'react-dom'


import Board from './board';
import { setBoard } from '../actions/actions';

class App extends React.Component{
  add(){
    let val = findDOMNode(this.refs.board);
    this.props.setBoard(val.value);
    val.value = ''
  }
  render(){
    return(
      <div>
        <h1>Welcome to todo</h1>
        <div>
          <input ref="board" type="text"/>
          <button onClick={()=> this.add()}>Add board</button>
          <section>
            {this.props.boards.map(item => (
                <Board key={item.id} id={item.id} name={item.name}/>
            ))}
          </section>
        </div>
      </div>
    )
  }
}

const get = (state) => {
  return {
      boards: state.board.boards
  }
};
const set = (dispatch) => {
  return {
    setBoard: (name) => {
      dispatch(setBoard(name))
    }
  }
};
export default connect(get,set)(App);