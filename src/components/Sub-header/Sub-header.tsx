import { FC } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

type SubHPropTypes = {
  label: string;
};

const SubHeader: FC<SubHPropTypes> = (props) => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  return (
    <div className='subheader-container'>
      <div className='subh-text'>{props.label}</div>
      {role === 'HR' ? (
        <button className='create-employee-button' onClick={() => navigate(`/employees/add`)}>
          <div className='add-blue-plus'>
            <img className='add-white-plus' src='/assets/img/plus.png' />
          </div>
          <div className='add-button-text'>Create Employee</div>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SubHeader;
