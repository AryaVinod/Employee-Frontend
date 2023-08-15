import { FC } from 'react';
import './Styles.css';

type InputPropTypes = {
  value: string;
  onChange: (evt) => void;
  label: string;
  placeholder: string;
  type: 'text';
};

const InputDropDown: FC<InputPropTypes> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <div>
        <select className='input-dd' onChange={props.onChange} value={props.value}>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
};

export default InputDropDown;
