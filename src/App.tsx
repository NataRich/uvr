import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <Route exact path='/' component={() => <Home />} />
        <Route path='/login' component={() => <Login />} />
        <Route path='/signup' component={() => <Signup />} />
        <Route path='/profile' component={() => <Profile />} />
      </Router>
    </div>
  );
};

export default App;
