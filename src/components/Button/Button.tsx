import { FC } from 'react';
import './Styles.css';

export type ButtonPropTypes = {
  onClick?: (evt) => void;
  label: string;
};

const Button: FC<ButtonPropTypes> = (props) => {
  return (
    <div>
      <div>
        <button type='button' className='button' onClick={props.onClick} data-testid='button-test'>
          {props.label}
        </button>
      </div>
    </div>
  );
};

export default Button;
