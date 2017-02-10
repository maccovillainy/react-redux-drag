export default (state = {
  counter: 1,
  zIndexCounter: 1,
  shapes: [],
  property: {
    square: {},
    circle: {}
  }
}, action) => {
  switch(action.type){
    case 'ADD_SHAPE':
      state = {
        ...state,
        counter: state.counter + 1,
        shapes: [
          ...state.shapes,
          {
            id: state.counter,
            type: action.payload.type,
            boardId: action.payload.boardId,
            coords: action.payload.coords,
            color: action.payload.color,
            zIndex: action.payload.zIndex
          }
        ]
      };
      break;
    case 'UPDATE_SHAPE':
      state = {
        ...state,
        shapes: state.shapes.map(item => {
          if (item.id == action.payload.id){
            item =  {
              ...item,
              coords: action.payload.coords
            }
          }
          return item;
        })

      };
      break;
    case 'INDEX_INCREMENT':
      state = {
        ...state,
        zIndexCounter: state.zIndexCounter + 1
      };
      break;
    case 'SET_PROPERTY':
      state = {
        ...state,
        property: action.payload
      };
      break;
  }
  return state;
}