import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const AppRouter = () => {
const dispatch = useDispatch();

const [checking, setChecking] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
          dispatch(login(user.uid, user.displayName));
          setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }

      setChecking(false);
    })
  },[ dispatch, setChecking, setIsLoggedIn ]);


  if(checking){
    return(<div>Loading...</div>);
    
  }

  return <div>
      <Router>
        <Switch> 
            <PrivateRoute
              isAuthenticated={isLoggedIn} 
              path="/" 
              component={JournalScreen} 
              exact 
            />

            <PublicRoute
              isAuthenticated={isLoggedIn} 
              path="/auth" 
              component={AuthRouter} 
            />

            <Redirect to="/auth/login" />
        </Switch>
      </Router>

  </div>;
};
