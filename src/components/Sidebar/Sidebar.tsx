import { FC } from 'react';
import './Styles.css';

const Sidebar: FC = () => {
  return (
    <div className='sidebar-container'>
      <div className='grey-box'>
        <img className='logo' src='/assets/img/kv-logo.png' />
      </div>
      <div className='blue-box'>
        <div className='white'>
          <img className='people' src='/assets/img/people.png' />
        </div>
        <div className='text'>Employee List</div>
      </div>
    </div>
  );
};

export default Sidebar;
