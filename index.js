import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory} from 'react-router'

import App from './components/app'
import Board from './components/board'
import Task from './components/tasks'
import Edit from './components/edit'
import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <Route path='board' component={Board} >
          <Route path='task' component={Task} >
            <Route path='edit/:id' component={Edit}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
  ,root)