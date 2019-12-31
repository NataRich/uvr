import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ERelogIn from './pages/login/error/ERelogIn';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Loader from './pages/loader/Loader';
import Profile from './pages/profile/Profile';
import { UserGeneralAPI } from './global/user/request';
import { APIMiddlewares } from './middlewares/API/APIMiddlewares';
import { UserClassType } from './global/user/class';

const API = new UserGeneralAPI();
const Middleware = new APIMiddlewares();

const App: React.FC = () => {
  const [ user, setUser ]             = useState<UserClassType | null>(null);
  const [ isFetching, setIsFetching ] = useState<boolean>(true);

  const fetchUser = async () =>  {
    setUser(await Middleware.getUser(API.getUser()));
    setIsFetching(false);
  };

  useEffect(() => { fetchUser() }, []);

  if (isFetching)
    return (
      <div style={{ height: '100vh' }}>
        <Loader />
      </div>
    );
  else
    return (
      <div style={{ height: '100vh' }}>
        <Router>
          <Route exact path='/' component={() => <Home />} />
          <Route path='/login' component={() => user ? <ERelogIn />:<Login />} />
          <Route path='/signup' component={() => user ? <ERelogIn />:<Signup />} />
          <Route path='/profile' component={() => <Profile />} />     {/* to do: user ? </>:</> */}
        </Router>
      </div>
    );
};

export default App;
