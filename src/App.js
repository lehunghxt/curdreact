import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import route from './pages/route'
import Navbar from './components/Navbar';
import Login from './pages/Auth/Login';

function App() {
  const [isLogin, setisLogin] = useState(false)
  return (
    <Router>
      {
        isLogin ?
          <>
            <Navbar />
            <div className='container-fluid'>
              <Routes>
                {
                  route.map(({ component: Component, path, key, ...props }) =>
                    <Route path={path} element={Component} key={key} />
                  )
                }
              </Routes>
            </div>
          </>
          :
          <>
            <Routes>
              <Route path='login' element={<Login setisLogin={setisLogin} />} />
            </Routes>
          </>
      }
    </Router>

  );
}

export default App;
