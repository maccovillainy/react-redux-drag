export default (state = {
  counter: 1,
  boards: [],
}, action) => {
  switch(action.type){
    case 'ADD_BOARD':
      state = {
        ...state,
        counter: state.counter + 1,
        boards: [
          ...state.boards,
          {
            id: state.counter,
            title: action.payload.title,
            isActive: false
          }
        ]
      };
      break;
    case 'REMOVE_BOARD':
      state = {
        ...state,
        boards: state.boards.filter(item => item.id !== action.payload)
      };
      break;
  }
  return state;
};