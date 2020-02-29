import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '~/pages/SignIn';

import Student from '~/pages/Student';
import StudentEdit from '~/pages/Student/StudentEdit';
import StudentRegister from '~/pages/Student/StudentRegister';
import Plans from '~/pages/Plans';
import PlansRegister from '~/pages/Plans/PlansRegister';
import PlansEdit from '~/pages/Plans/PlansEdit';
import Enrollment from '~/pages/Enrollment';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="/students" component={Student} isPrivate />
      <Route path="/student/profile/:id" component={StudentEdit} isPrivate />
      <Route path="/student/register" component={StudentRegister} isPrivate />

      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/plan/register" component={PlansRegister} isPrivate />
      <Route path="/plan/edit/:plan_id" component={PlansEdit} isPrivate />

      <Route path="/enrollments" component={Enrollment} isPrivate />

      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
