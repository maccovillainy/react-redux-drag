import React from 'react';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome to todo</h1>
        <div>
          <input type="text"/>
          <button>Add board</button>
        </div>
        
      </div>
    )
  }
}
