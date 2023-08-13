import { FC } from 'react';
import './Styles.css';

type ButtonPropTypes = {
  onClick: (evt) => void;
  label: string;
  color: 'blue' | 'white';
};

const SmallButton: FC<ButtonPropTypes> = (props) => {
  const buttonColor = `${props.color === 'blue' ? 'blue-button' : 'white-button'}`;

  return (
    <div>
      <div>
        <button type='button' className={buttonColor} onClick={props.onClick}>
          {props.label}
        </button>
      </div>
    </div>
  );
};

export default SmallButton;
