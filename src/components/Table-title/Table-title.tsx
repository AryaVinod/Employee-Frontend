import { FC } from 'react';
import './Styles.css';

const TableTitle: FC = () => {
  return (
    <div className='title-div'>
      <div className='title-heading'>Employee Name</div>
      <div className='title-heading'>Employee ID</div>
      <div className='title-heading'>Joining Date</div>
      <div className='title-heading'>Role</div>
      <div className='title-heading'>Status</div>
      <div className='title-heading'>Experience</div>
      <div className='title-heading'>Actions</div>
    </div>
  );
};

export default TableTitle;
