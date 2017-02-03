export default (state = {
  id: 1,
  tasks: []
}, action) => {
  switch(action.type){
    case 'ADD_TASK':
      state = {
        ...state,
        id: state.id + 1,
        tasks: [
          ...state.tasks,
          {
            id: state.id,
            name: action.payload.name,
            parentId: action.payload.parentId,
            checked: false
          }
        ]
      };break;
    case 'MARK':
      state = {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload.id)
          item.checked = action.payload.checked;
          return item;
        })
      };break;
    case 'REMOVE_TASK':
      state = {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      };break;
  }
  return state;
}