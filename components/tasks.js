import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { mark, removeTask } from '../actions/actions'

class Task extends React.Component{
  change(e){
    this.props.mark(this.props.id, e.target.checked)
  }
  render(){
    let c = this.props.checked ? 'line-through' : 'none'
    return(
      <div>
        <label>
          <span style={{textDecoration: c}}>
            {this.props.name}
          </span>
          <input onChange={(e) => this.change(e) } type="checkbox"/>
        </label>
        <button onClick={() => this.props.removeTask(this.props.id)} >delete task</button>
        <Link to={`/board/task/edit/${this.props.id}`}>edit task</Link>
       {this.props.children}

      </div>
    )
  }
}


const set = (dispatch) => {
  return {
    mark: (id, checked) => {
      dispatch(mark(id,checked))
    },
    removeTask: (id) => {
      dispatch(removeTask(id));
    }
  }
}

export default connect(null,set)(Task);