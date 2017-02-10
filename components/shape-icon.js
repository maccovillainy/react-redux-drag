import React from 'react';
import {connect} from 'react-redux';
import Draggable, {DraggableCore} from 'react-draggable';
import {setShape} from '../actions/actions';
import { indexIncrement } from '../actions/actions';

@connect((state) => {
  return {
    maxShapeIncrement: state.Shape.zIndexCounter,
    property: state.Shape.property
  }
}, dispatch => {
  return {
    setShape: (type, id, coords, color, zIndex) => {
      dispatch(setShape(type, id, coords, color, zIndex))
    },
    indexIncrement: () => {
      dispatch(indexIncrement())
    }
  }
})
class ShapeIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        opacity: 0,
        zIndex: 2
      }
    }
  }


  handleStart() {

    this.props.indexIncrement();
  }


  toggle(param) {
    this.setState({
      style: {
        ...this.state.style,
        opacity: param ? 1 : 0
      }
    });
  }

  render() {
    let position, size;
    if (this.props.type == 'square') {
      position = this.props.property.square.coords
      size = this.props.property.square.size
    } else {
      position = this.props.property.circle.coords
      size = this.props.property.circle.size
    }
    return (

      <Draggable
        handle=".handle"
        position={position}
        bounds="parent"
        onStart={()=> {this.handleStart(); this.toggle(true)}}
        onStop={(e, res) => {
        let mouseY, mouseX;
        let windowHeight = document.documentElement.clientHeight;
        let windowWidth = document.documentElement.clientWidth;

        if (e.clientY <= 0) {
          mouseY = 0;
        }
        else {
          mouseY = e.clientY
        }
        if (e.clientY >= windowHeight) {
          mouseY = windowHeight;
        }
        if (e.clientX <= 0) {
          mouseX = 0;
        }
        else {
          mouseX = e.clientX
        }
        if (e.clientX >= windowWidth) {
          mouseX = windowWidth;
        }

            let coords = res.node.getBoundingClientRect();
            let xPers = (mouseX - coords.left) / res.node.offsetWidth;
            let yPers = (mouseY - coords.top) / res.node.offsetHeight;
            let x = mouseX - (150 * xPers);
            let y = mouseY - (150 * yPers);
            
            this.toggle(false);
            
            function getRandomInt(min, max) {
              return Math.floor(Math.random() * (max - min)) + min;
            }
            this.props.setShape(this.props.type, this.props.boardId, { x, y }, `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`, this.props.maxShapeIncrement);
          }}>
        <div
          style={
          {
            ...this.state.style,
            ...size,
            zIndex: this.props.maxShapeIncrement + 3
          }
          }
          className={`${this.props.type} small handle`}>
        </div>
      </Draggable>
    )
  }
}
export default ShapeIcon;
