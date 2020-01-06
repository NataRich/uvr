import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error404 from './pages/404/404';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Watch from './pages/video/Watch';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path='/videos/:trackId' component={Watch} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
