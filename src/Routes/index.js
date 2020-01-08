import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '~/pages/SignIn';

import Student from '~/pages/Student';
import StudentEdit from '~/pages/Student/StudentEdit';
import StudentRegister from '~/pages/Student/StudentRegister';
import Plans from '~/pages/Plans';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="/students" component={Student} isPrivate />
      <Route path="/student/profile/:id" component={StudentEdit} isPrivate />
      <Route path="/student/register" component={StudentRegister} isPrivate />

      <Route path="/plans" component={Plans} isPrivate />
    </Switch>
  );
}
