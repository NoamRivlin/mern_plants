// import React from 'react';
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routers>
            <Route path='/' element={<Dashboard />}></Route>
          </Routers>
        </div>
      </Router>
    </>
  );
}

export default App;
