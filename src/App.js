/** @format */

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={SignUp} />
        <Route path='/login' element={Login} />
      </Routes>
    </div>
  );
}

export default App;
