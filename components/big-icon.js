import React from 'react';
import { connect } from 'react-redux';
import Draggable, {DraggableCore} from 'react-draggable';

import { indexIncrement, updateShape } from '../actions/actions';

@connect((state) => {
  return {
    maxShapeIncrement: state.Shape.zIndexCounter
  }
}, dispatch => {
  return {
    indexIncrement: () => {
      dispatch(indexIncrement())
    },
    updateShape: ( id, coords) => {
      dispatch(updateShape(id, coords))
    }
  }
})
export default class BigIcon extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      style: props.style,
      defPos: {
        x: 0,
        y: 0
      }
    };

    this.handleStart = this.handleStart.bind(this);
  }
  handleStart() {
    this.setState({
      style: {
        ...this.state.style,
        zIndex: this.props.maxShapeIncrement + 2
      }
    });

    this.props.indexIncrement();
  }
  handleStop(e,ui) {
    let coordsElem = ui.node.getBoundingClientRect();
    let coords = {
        x: coordsElem.left,
        y: coordsElem.top
    }
    this.props.updateShape(this.props.id, coords)
  }
  render(){
    console.log(this.props.style)
    return(
      <Draggable
        handle=".handle"
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop.bind(this)}
        bounds="parent">
          <div
            style={this.state.style}
            className={this.props.class + ' handle'}
          ></div>
      </Draggable>
    )
  }
}