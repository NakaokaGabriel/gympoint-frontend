import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Student from '../pages/Student';
import StudentForm from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="/student" component={Student} isPrivate />
      <Route path="/student/register" component={StudentForm} isPrivate />
    </Switch>
  );
}
