export default (state = {
  id: 1,
  boards: []
}, action) => {
  switch(action.type){
    case 'ADD_BOARD':
      state = {
        ...state,
        id: state.id + 1,
        boards: [
          ...state.boards,
          {
            id: state.id,
            name: action.payload
          }
        ]
      };break;
    case 'REMOVE_BOARD':
      state = {
        ...state,
        boards: state.boards.filter(item => item.id !== action.payload)
      };break;
  }
  return state;
};