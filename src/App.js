import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import route from './pages/route'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
