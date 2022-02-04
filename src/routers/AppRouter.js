import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return <div>
      <Router>
        <Switch> 
            <Route path="/" component={JournalScreen} exact />
            <Route path="/auth" component={AuthRouter} />

            <Redirect to="/auth/login" />
        </Switch>
      </Router>

  </div>;
};
