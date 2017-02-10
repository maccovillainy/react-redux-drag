import React from 'react';
import { findDOMNode } from 'react-dom';
import ShapeIcon from './shape-icon';
import { connect } from 'react-redux';

import { setFigPos } from '../actions/actions'

@connect((state) => {
  return {
    maxShapeIncrement: state.Shape.zIndexCounter
  }
},
dispatch => {
  return {
    setFigPos : (property)=> dispatch(setFigPos(property))
  }
})
class ShapeCreator extends React.Component{
  componentDidMount(){
    let buttonCircle = findDOMNode(this.refs.buttonCircle)
    let buttonSquare = findDOMNode(this.refs.buttonSquare)
    let squareBounds = buttonSquare.getBoundingClientRect()
    let circleBounds = buttonCircle.getBoundingClientRect()
    let property = {
      square: {
        size: {
          width: buttonSquare.offsetWidth,
          height: buttonSquare.offsetHeight,
        },
        coords: {
          x: squareBounds.left,
          y: squareBounds.top,
        }
      },
      circle: {
        size: {
          width: buttonCircle.offsetWidth,
          height: buttonCircle.offsetHeight,
        },
        coords: {
          x: circleBounds.left,
          y: circleBounds.top,
        }
      }
    }

    this.props.setFigPos(property);
  }
  render(){
    return(
      <div className="columns" >
        <div className="column is-narrow" style={{ zIndex: this.props.maxShapeIncrement + 2, position: 'relative' }}>
          <div className="box">
            <div className="menu">
              <div className="menu-list">
                <div ref='buttonCircle' className={`button is-large is-info`}>
                  <i className={`fa fa-circle`}></i>
                </div>
              </div>
              <div className="menu-list">
                <div ref='buttonSquare' className={`button is-large is-success`}>
                  <i className={`fa fa-square`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShapeCreator;
