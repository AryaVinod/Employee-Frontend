import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { FC } from 'react';
import './Styles.css';
import SubHeader from '../../components/Sub-header/Sub-header';

const Employee: FC = () => {
  return (
    <div className='emp-container'>
      <Sidebar />
      <div className='right-layout'>
        <Header />
        <SubHeader label='Employee List' />
      </div>
    </div>
  );
};

export default Employee;
