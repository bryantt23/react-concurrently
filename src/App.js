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
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Jobs from './components/Jobs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/employees/:id' component={Employee} />
        <Route path='/employees'>
          <Employees />
        </Route>
        <Route path='/add-employee'>
          <AddEmployee />
        </Route>
        <Route path='/edit-employee/:id'>
          <EditEmployee />
        </Route>
        <Route path='/'>
          <Jobs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
