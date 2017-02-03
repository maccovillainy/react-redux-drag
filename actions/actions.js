export function setBoard(name){
  return {
    type: "ADD_BOARD",
    payload: name
  }
}export function unsetBoard(id){
  return {
    type: "REMOVE_BOARD",
    payload: id
  }
}

export function setTask(name, parentId){
  return {
    type: "ADD_TASK",
    payload: {
      name,
      parentId

    }
  }
}
export function removeTask(id){
  return {
    type: "REMOVE_TASK",
    payload: id
  }
}
export function mark(id, checked){
  return {
    type: "MARK",
    payload: {
      id,
      checked

    }
  }
}