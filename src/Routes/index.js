import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '~/pages/SignIn';

import Student from '~/pages/Student';
import StudentEdit from '~/pages/Student/StudentEdit';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="/student" component={Student} isPrivate />
      <Route path="./student/:id" component={StudentEdit} isPrivate />
    </Switch>
  );
}
