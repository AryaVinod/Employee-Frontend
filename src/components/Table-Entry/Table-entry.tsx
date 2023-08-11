import { FC } from 'react';
import './Styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';

type EntryPropTypes = {
  key: number;
  name: string;
  joiningDate: string;
  experience: number;
  role: string;
  id: number;
};

const TableEntry: FC<EntryPropTypes> = (props) => {
  const navigate = useNavigate();

  return (
    <div className='entry-div' onClick={() => navigate(`/employees/${props.id}`)}>
      <div className='entry'>{props.name}</div>
      <div className='entry'>{props.id}</div>
      <div className='entry'>{props.joiningDate}</div>
      <div className='entry'>{props.role}</div>
      <div className='entry'>
        <Status />
      </div>
      <div className='entry'>{props.experience}</div>
      <div className='entry'></div>
    </div>
  );
};

export default TableEntry;
