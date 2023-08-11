import { FC } from 'react';
import './Styles.css';

type SubHPropTypes = {
  label: string;
};

const SubHeader: FC<SubHPropTypes> = (props) => {
  return (
    <div className='subheader-container'>
      <div className='subh-text'>{props.label}</div>
    </div>
  );
};

export default SubHeader;
