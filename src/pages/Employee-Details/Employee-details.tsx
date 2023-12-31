import { FC } from 'react';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import EmployeeField from '../../components/Employee-Fields/Employee-fields';
import { useNavigate, useParams } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: 'Ashok',
    joiningDate: '11/02/2012',
    experience: 8,
    role: 'admin',
    address: {
      addressLine1: 'Edachira',
      addressLine2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    id: 2,
    name: 'Ashok',
    joiningDate: '11/02/2012',
    experience: 8,
    role: 'admin',
    address: {
      addressLine1: 'Edachira',
      addressLine2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  }
];

const EmployeeDetails: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const emp = data.find((employee) => employee.id === Number(id));

  return (
    <div>
      <EmployeeLayout>
        <div className='details-subh'>
          <div className='details-subh-text'>Employee Details</div>
          <button
            className='edit-employee-button'
            onClick={() => navigate(`/employees/${id}/edit`)}
          >
            <div className='add-blue-plus'>
              <img className='add-white-plus' src='/assets/img/Edit.svg' />
            </div>
            <div className='add-button-text'>Edit</div>
          </button>
        </div>
        <div className='details-container'>
          <EmployeeField label='Name' value={emp.name} />
          <EmployeeField label='Joining Date' value={emp.joiningDate} />
          <EmployeeField label='Experience' value={emp.experience} />
          <EmployeeField label='Role' value={emp.role} />
          <EmployeeField label='Status' value={null} />
          <EmployeeField
            label='Address'
            value={`${emp.address.addressLine1}, ${emp.address.addressLine2}, ${emp.address.city}, ${emp.address.state}, ${emp.address.country}, ${emp.address.pincode}`}
          />
          <EmployeeField label='Employee ID' value={emp.id} />
        </div>
      </EmployeeLayout>
    </div>
  );
};

export default EmployeeDetails;
