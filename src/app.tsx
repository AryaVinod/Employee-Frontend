import { type FC } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Employee from './pages/Employee/Employee';
import EmployeeDetails from './pages/Employee-Details/Employee-details';
import AddEmployee from './pages/Add-Employee/Add-employee';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/employees/add' element={<AddEmployee />} />
          <Route path='/employees/:id/edit' element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
