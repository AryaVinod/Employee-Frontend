import { FC } from 'react';
import './Styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../actions/employeeAction';

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
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteEmployee({ employee: { id } }));
  };

  const handleProp = (e) => {
    e.stopPropagation();
    navigate(`/employees/${props.id}/edit`);
  };

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
      <div className='entry'>
        <img
          src='/assets/img/delete.png'
          className='edit-delete-icon'
          onClick={(e) => handleDelete(e, props.id)}
        />
        <img
          src='/assets/img/Edit.png'
          className='edit-delete-icon'
          onClick={(e) => handleProp(e)}
        />
      </div>
    </div>
  );
};

export default TableEntry;
