import { FC, useState } from 'react';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import Input from '../../components/Input/input';
import InputDropDown from '../../components/Input-dropdown/Input-dropdown';
import { useNavigate, useParams } from 'react-router-dom';
import SmallButton from '../../components/Small-button/Small-button';

const AddEmployee: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');

  return (
    <div>
      <EmployeeLayout>
        <div className='create-tab'>
          {id ? (
            <div className='subh-text'>Edit Employee</div>
          ) : (
            <div className='subh-text'>Create Employee</div>
          )}
        </div>
        <form className='form-box'>
          <div className='flex-container'>
            <Input
              label='Employee Name'
              value={name}
              onChange={function (evt: any) {
                setName(evt.target.value);
              }}
              placeholder='Employee Name'
              type='text'
            />
            <Input
              label='Joining Date'
              value={joiningDate}
              onChange={function (evt: any) {
                setJoiningDate(evt.target.value);
              }}
              placeholder='Joining Date'
              type='text'
            />
            <Input
              label='Experience'
              value={experience}
              onChange={function (evt: any) {
                setExperience(evt.target.value);
              }}
              placeholder='Experience'
              type='text'
            />
            <InputDropDown
              label='Joining Date'
              value={joiningDate}
              onChange={function (evt: any) {
                setJoiningDate(evt.target.value);
              }}
              placeholder='Joining Date'
              type='text'
            />
            <InputDropDown
              label='Role'
              value={role}
              onChange={function (evt: any) {
                setRole(evt.target.value);
              }}
              placeholder='Role'
              type='text'
            />
            <InputDropDown
              label='Status'
              value={status}
              onChange={function (evt: any) {
                setStatus(evt.target.value);
              }}
              placeholder='Status'
              type='text'
            />
            <div className='address-cont'>
              <Input
                label='Address'
                value={address}
                onChange={function (evt: any) {
                  setAddress(evt.target.value);
                }}
                placeholder='Address'
                type='text'
              />
              <input
                className='address-line'
                value={line1}
                onChange={function (evt: any) {
                  setLine1(evt.target.value);
                }}
                placeholder='Line 1'
                type='text'
              />
              <input
                className='address-line'
                value={line2}
                onChange={function (evt: any) {
                  setLine2(evt.target.value);
                }}
                placeholder='Line 2'
                type='text'
              />
            </div>
            {id ? (
              <Input
                label='Employee ID'
                value={id}
                onChange={() => {}}
                placeholder='Eployee ID'
                type='text'
              />
            ) : null}
          </div>
          <div className='button-cont'>
            <SmallButton label={id ? 'Save' : 'Create'} color='blue' onClick={() => {}} />
            <SmallButton label='Cancel' color='white' onClick={() => navigate('/employees')} />
          </div>
        </form>
      </EmployeeLayout>
    </div>
  );
};

export default AddEmployee;
