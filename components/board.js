import React from 'react';
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import Task from './tasks';
import {  } from '../actions/actions'
import { unsetBoard, setTask } from '../actions/actions'


class Board extends React.Component{
  add(){
    let val = findDOMNode(this.refs.task)
    this.props.setTask(val.value, this.props.id)
    val.value = '';
  }
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.unsetBoard(this.props.id)}>Remove board</button>
        <input ref="task" type="text"/>
        <button onClick={()=> this.add()}>Add board</button>
        {this.props.task.map(item => {
          if (item.parentId === this.props.id)
            return(
              <div key={item.id} >
              <Task name={item.name} id={item.id} checked={item.checked}/>
                </div>
            )
        })
        }
      </div>
    )
  }
}

const get = (state) => {
  return {
    task: state.task.tasks
  }
};

const set = (dispatch) => {
  return {
    setTask: (name, parentId) => {
      dispatch(setTask(name, parentId))
    },
    unsetBoard: (id) => {
      dispatch(unsetBoard(id))
    }
  }
};

export default connect(get,set)(Board)