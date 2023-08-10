import Input from '../../components/Input/input';
import { useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';
import './Styles.css';
import Button from '../../components/Button/Button';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = () => {
    if (username && password) navigate('/employee');
    else setError(true);
  };

  return (
    <div className='container'>
      <div className='left-container'>
        <img className='banner' src='assets/img/banner.png' />
      </div>
      <div className='right-container'>
        <img className='logo' src='assets/img/kv-logo.png' />
        <Input
          label='Username'
          value={username}
          onChange={function (evt: any) {
            setUsername(evt.target.value);
          }}
          placeholder='Username'
          type='text'
        />
        <Input
          label='Password'
          value={password}
          onChange={function (evt: any) {
            setPassword(evt.target.value);
          }}
          placeholder='Password'
          type='password'
        />
        <Button label='Submit' onClick={onSubmit} />
        {showError && <div>Enter username and password</div>}
      </div>
    </div>
  );
};

export default Login;
