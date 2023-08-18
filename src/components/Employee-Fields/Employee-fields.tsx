import { FC } from 'react';
import './Styles.css';
import Status from '../Status/Status';

export type FieldPropTypes = {
  label: string;
  value: string | number | null;
};

const EmployeeField: FC<FieldPropTypes> = (props) => {
  return (
    <div className='field-container'>
      <div className='field-text'>{props.label}</div>
      {props.value ? <div>{props.value}</div> : <Status />}
    </div>
  );
};

export default EmployeeField;
