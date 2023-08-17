import { FC } from 'react';
import './Styles.css';

type InputPropTypes = {
  value: string;
  onChange: (evt) => void;
  label: string;
  placeholder: string;
  type: 'text';
  options: { label: string; id: string }[];
};

const InputDropDown: FC<InputPropTypes> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <div>
        <select className='input-dd' onChange={props.onChange} value={props.value}>
          <option>Choose {props.label}</option>
          {props.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputDropDown;
