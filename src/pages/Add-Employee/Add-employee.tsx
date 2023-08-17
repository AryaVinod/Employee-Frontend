import { FC, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import Input from '../../components/Input/input';
import InputDropDown from '../../components/Input-dropdown/Input-dropdown';
import { useNavigate, useParams } from 'react-router-dom';
import SmallButton from '../../components/Small-button/Small-button';
// import { editEmployee } from '../../actions/employeeAction';
import { useAddEmployeeMutation, useEditEmployeeMutation } from './api';
import { useGetDepartmentsQuery, useGetEmployeeDetailsQuery } from '../Employee/api';

const AddEmployee: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  // const [status, setStatus] = useState('');
  const [city, setCity] = useState('');
  const [addressLine1, setLine1] = useState('');
  const [addressLine2, setLine2] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pin, setPin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const [createEmployee, { isSuccess: isCreateSuccess }] = useAddEmployeeMutation();
  const [editEmployee, { isSuccess: isEditSuccess }] = useEditEmployeeMutation();

  const { data: deptData } = useGetDepartmentsQuery();

  const { data } = useGetEmployeeDetailsQuery(id);
  const emp = data?.data || {};

  // const { data: rolesData } = useGetRolesQuery();

  const deptOptions = deptData?.data?.map((dept) => ({ id: dept.id, label: dept.name }));
  // const rolesOptions = Object.keys(rolesData || {})?.map((key) => ({
  //   id: key,
  //   label: rolesData[key]
  // }));

  // console.log(rolesOptions);

  // const employee = data?.data || {};

  const handleSubmit = () => {
    // if (
    //   name &&
    //   joiningDate &&
    //   experience &&
    //   role &&
    //   department &&
    //   city &&
    //   addressLine1 &&
    //   addressLine2 &&
    //   state &&
    //   country &&
    //   pin &&
    //   username &&
    //   password
    // )
    createEmployee({
      name,
      username,
      password,
      joiningDate,
      experience: Number(experience),
      department_id: Number(department),
      role,
      address: {
        line1: addressLine1,
        line2: addressLine2,
        city,
        state,
        country,
        pincode: pin
      }
    });
  };

  useEffect(() => {
    if (isEditSuccess) navigate('/employees');
  }, [isEditSuccess]);

  useEffect(() => {
    if (isCreateSuccess) navigate('/employees');
  }, [isCreateSuccess]);

  const handleEdit = (e, id) => {
    e.stopPropagation();

    editEmployee({
      id,
      body: {
        name,
        username,
        password,
        joiningDate,
        experience: Number(experience),
        departmetId: Number(department),
        role,
        address: {
          line1: addressLine1,
          line2: addressLine2,
          city,
          state,
          country,
          pincode: pin
        }
      }
    });
    navigate('/employees');
  };

  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });

  useEffect(() => {
    if (emp && id) {
      setName(emp.name);
      setUsername(emp.username);
      setPassword(emp.password);
      setJoiningDate(emp.joiningDate);
      setRole(emp.role);
      setExperience(emp.experience);
      setDepartment(emp.departmetId);
      setLine1(emp.address?.line1);
      setLine2(emp.address?.line2);
      setCity(emp.address?.city);
      setState(emp.address?.state);
      setCountry(emp.address?.country);
      setPin(emp.address?.pincode);
    }
  }, [emp]);

  if (!deptOptions) return <div>Loading Data</div>;

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
              label='Department'
              value={department}
              onChange={function (evt: any) {
                setDepartment(evt.target.value);
                console.log(evt.target);
              }}
              placeholder='Department'
              options={deptOptions}
              type='text'
            />
            <div className='address-cont'>
              <Input
                label='Address'
                value={addressLine1}
                onChange={function (evt: any) {
                  setLine1(evt.target.value);
                }}
                placeholder='Address Line 1'
                type='text'
              />
              <input
                className='address-line2'
                value={addressLine2}
                onChange={function (evt: any) {
                  setLine2(evt.target.value);
                }}
                placeholder='Address Line 2'
                type='text'
              />
              <input
                className='address-line'
                value={city}
                onChange={function (evt: any) {
                  setCity(evt.target.value);
                }}
                placeholder='City'
                type='text'
              />
              <input
                className='address-line'
                value={state}
                onChange={function (evt: any) {
                  setState(evt.target.value);
                }}
                placeholder='State'
                type='text'
              />
              <input
                className='address-line'
                value={country}
                onChange={function (evt: any) {
                  setCountry(evt.target.value);
                }}
                placeholder='Country'
                type='text'
              />
              <input
                className='address-line'
                value={pin}
                onChange={function (evt: any) {
                  setPin(evt.target.value);
                }}
                placeholder='Pincode'
                type='text'
              />
            </div>
            <InputDropDown
              label='Role'
              value={role}
              onChange={function (evt: any) {
                setRole(evt.target.value);
              }}
              placeholder='Role'
              options={[
                { id: 'Admin', label: 'Admin' },
                { id: 'HR', label: 'HR' },
                { id: 'Developer', label: 'Developer' },
                { id: 'User', label: 'User' }
              ]}
              type='text'
            />
            <Input
              label='Status'
              value='Active'
              onChange={() => {}}
              placeholder='Status'
              type='text'
            />
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
            <SmallButton
              label={id ? 'Save' : 'Create'}
              color='blue'
              onClick={id ? (e) => handleEdit(e, id) : handleSubmit}
            />
            <SmallButton label='Cancel' color='white' onClick={() => navigate('/employees')} />
          </div>
        </form>
      </EmployeeLayout>
    </div>
  );
};

export default AddEmployee;
