import { FC } from 'react';
import './Styles.css';

type InputPropTypes = {
  value: string;
  onChange: (evt) => void;
  label: string;
  placeholder: string;
  type: 'text' | 'password' | 'address';
};

const Input: FC<InputPropTypes> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <div>
        <input
          className='input'
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        ></input>
      </div>
    </div>
  );
};

export default Input;
