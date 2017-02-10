export function setBoard(title){
  return {
    type: "ADD_BOARD",
    payload: {
      title
    }
  }
}

export function setShape(type, boardId, coords, color, zIndex){
  return {
    type: "ADD_SHAPE",
    payload: {
      type,
      boardId,
      coords,
      color, 
      zIndex
    }
  }
}
export function updateShape(id, coords){
  return {
    type: "UPDATE_SHAPE",
    payload: {
      id,
      coords
    }
  }
}

export function setFigPos(property){
  return {
    type: "SET_PROPERTY",
    payload: property
  }
}

export function indexIncrement(){
  return {
    type: "INDEX_INCREMENT"
  }
}

