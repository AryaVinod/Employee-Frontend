import { FC } from 'react';
import './Styles.css';

type SubHPropTypes = {
  label: string;
};

const SubHeader: FC<SubHPropTypes> = (props) => {
  return (
    <div className='subheader-container'>
      <div className='subh-text'>{props.label}</div>
      <button className='create-employee-button'>
        <div className='add-blue-plus'>
          <img className='add-white-plus' src='/assets/img/plus.png' />
        </div>
        <div className='add-button-text'>Create Employee</div>
      </button>
    </div>
  );
};

export default SubHeader;
