import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <div className="App" style={{
      height: '100vh'
    }}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Router>
    </div>
  );
}

export default App;
