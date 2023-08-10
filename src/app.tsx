import { type FC } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Employee from './pages/Empoyee/Employee';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
