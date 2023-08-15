import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import Input from '../../components/Input/input';
import InputDropDown from '../../components/Input-dropdown/Input-dropdown';
import { useNavigate, useParams } from 'react-router-dom';
import SmallButton from '../../components/Small-button/Small-button';

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

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: 'Employee:Create',
      payload: {
        employee: {
          id: 3,
          name,
          joiningDate,
          experience,
          role,
          address: {
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city,
            state: 'Kerala',
            country: 'India',
            pincode: '682024'
          }
        }
      }
    });
  };

  const handleEdit = (e, id) => {
    e.stopPropagation();

    if (id) {
      const employeeToUpdate = employeesData.find((employee) => employee.id === Number(id));

      if (employeeToUpdate) {
        const updatedEmployee = {
          id: employeeToUpdate.id,
          name,
          joiningDate,
          experience,
          role,
          address: {
            addressLine1,
            addressLine2,
            city,
            state: 'Kerala',
            country: 'India',
            pincode: '682024'
          }
        };

        dispatch({
          type: 'Employee:Edit',
          payload: {
            employee: updatedEmployee
          }
        });
      }
    }
  };

  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  useEffect(() => {
    const emp = employeesData.find((employee) => employee.id === Number(id));

    if (emp) {
      setName(emp.name);
      setJoiningDate(emp.joiningDate);
      setRole(emp.role);
      setExperience(emp.experience);
      setLine1(emp.address.addressLine1);
      setLine2(emp.address.addressLine2);
      setCity(emp.address.city);
    }
  }, [id]);

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
              label='Department'
              value={department}
              onChange={function (evt: any) {
                setDepartment(evt.target.value);
              }}
              placeholder='Department'
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
            <Input
              label='Status'
              value='Active'
              onChange={() => {}}
              placeholder='Status'
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
                className='address-line'
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
