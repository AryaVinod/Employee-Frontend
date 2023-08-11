import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { FC } from 'react';
import './Styles.css';

const EmployeeLayout: FC = (props) => {
  return (
    <div className='emp-container'>
      <Sidebar />
      <div className='right-layout'>
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default EmployeeLayout;
