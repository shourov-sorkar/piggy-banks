import useDisabledOpenInspect from './hooks/useDisabledOpenInspect';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
  useDisabledOpenInspect();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
