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
        <select className='input-dd'>
          <option placeholder={props.placeholder} onChange={props.onChange} value={props.value}>
            1
          </option>
          <option placeholder={props.placeholder} onChange={props.onChange} value={props.value}>
            2
          </option>
        </select>
      </div>
    </div>
  );
};

export default InputDropDown;
