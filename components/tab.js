import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Draggable, {DraggableCore} from 'react-draggable';

import BigIcon from './big-icon'
import ShapeCreator from './shape-creator';
import ShapeIcon from './shape-icon';

@connect((state) => {
  return {
    boards: state.Board.boards || [],
    shapes: state.Shape.shapes || [],
    maxShapeIncrement: state.Shape.zIndexCounter,
  }
})
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBoardId: 0
    }
  }
  componentDidUpdate() {
    if(this.state.activeBoardId > 0) {
      return;
    }

    if(!this.props.boards.length) {
      return;
    }
    
    this.setState({
      activeBoardId: this.props.boards[0].id
    });
  }
  setActiveBoard(id){
    this.setState({
      activeBoardId: id
    });
  }
  render() {
    return(
      <div>
        <nav style={{zIndex: this.props.maxShapeIncrement + 2}} className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              {this.props.boards.map(item => {
                let navClass = classNames('nav-item', 'is-tab', 'is-hidden-mobile', { 
                  'is-active': item.id == this.state.activeBoardId
                });
                
                return <a key={item.id} className={navClass} onClick={()=> this.setActiveBoard(item.id)}>{item.title}</a>
              })}
            </div>
          </div>
        </nav>
        <div>
          <ShapeCreator boardId={this.state.activeBoardId}/>
        </div>
        <ul style={{position: 'absolute', display: 'block', width: "100%", height: "100%", left: 0, top: 0}}>
          {this.props.shapes.map((item) => {
            if (item.boardId == this.state.activeBoardId) {
              return (
                <BigIcon
                  key={item.id}
                  id={item.id}
                  style={{
                    top: item.coords.y,
                    left: item.coords.x,
                    zIndex: item.zIndex,
                    background: item.color
                  }}
                  class={item.type} />
              )
            }
          })}
          <ShapeIcon boardId={this.state.activeBoardId} type="circle"/>
          <ShapeIcon boardId={this.state.activeBoardId} type="square"/>
        </ul>
      </div>
    )
  }
}
export default Tab;