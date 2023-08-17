/* eslint-disable no-debugger */
import Input from '../../components/Input/input';
import { useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import './Styles.css';
import Button from '../../components/Button/Button';
import { useLoginMutation } from './api';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const navigate = useNavigate();

  const [login, { data, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (data && isSuccess) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user_id', data.data.employee.id);
      localStorage.setItem('role', data.data.employee.role);
      navigate('/employees');
    }
  }, [data, isSuccess]);

  const onSubmit = () => {
    if (username && password) login({ username, password });
    else setError(true);
  };

  return (
    <div className='container'>
      <div className='left-container'>
        <img src='assets/img/banner.png' className='circle' />
        {/* <img className='banner' src='assets/img/banner.png' /> */}
      </div>
      <div className='right-container'>
        <img className='kv-logo' src='assets/img/kv-logo.png' />
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
        <Button label='Login' onClick={onSubmit} />
        {showError && <div>Enter username and password</div>}
      </div>
    </div>
  );
};

export default Login;
