import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { FC } from 'react';
import './Styles.css';

const Employee: FC = () => {
  return (
    <div className='emp-container'>
      <Sidebar />
      <Header />
    </div>
  );
};

export default Employee;
