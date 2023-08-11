import { type FC } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Employee from './pages/Employee/Employee';
import EmployeeDetails from './pages/Employee-Details/Employee-details';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
