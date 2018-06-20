
import * as React from "react";
import { MainLayout } from './layouts/MainLayout';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import { UsersListComponent } from "./users/UsersListComponent";
import { UsersCRUDComponent } from "./users/UsersCRUDComponent";
import { UserDetailsComponent } from "./users/UserDetailsComponent";

import 'bootstrap/dist/css/bootstrap.css';

export class App extends React.Component<{}, {}> {
 
  componentWillMount() {
    localStorage.setItem('students', null);
  }
 
  render() {
    return <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRedirect to="/users" />
          <Route path="/users" component={UsersListComponent} />
          <Route path="/users/add" component={UsersCRUDComponent} />
          <Route path="/user/:id" component={UserDetailsComponent} />
        </Route>
    </Router>
  }
}

