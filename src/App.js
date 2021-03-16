import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Employees from './components/Employees';
import Employee from './components/Employee';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/employees/:id' component={Employee} />
        <Route path='/employees'>
          <Employees />{' '}
        </Route>
        <Route path='/'>
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
