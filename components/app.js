import React from 'react';
import { connect } from 'react-redux';

import Tab from './tab';

import { setBoard } from '../actions/actions';

let boards = ['board 1', 'board 2', 'board 3'];

@connect(null, (dispatch) => {
  return {
    setBoard: (name) => {
      dispatch(setBoard(name))
    }
  }
})
class App extends React.Component{
  componentDidMount(){
    boards.forEach(item => this.props.setBoard(item))
  }
  render(){
    return(
      <div>
        <Tab />
      </div>
    )
  }
}
export default App;