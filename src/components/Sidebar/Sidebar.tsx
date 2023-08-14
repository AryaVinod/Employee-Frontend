import { FC } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='sidebar-container'>
      <div className='grey-box'>
        <img className='logo' src='/assets/img/kv-logo.png' />
      </div>
      <div className='blue-box' onClick={() => navigate(`/employees`)}>
        <div className='white'>
          <img className='people' src='/assets/img/people.png' />
        </div>
        <div className='text'>Employee List</div>
      </div>
    </div>
  );
};

export default Sidebar;
