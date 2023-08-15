import { FC } from 'react';
import { useSelector } from 'react-redux';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import EmployeeField from '../../components/Employee-Fields/Employee-fields';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeDetails: FC = () => {
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const emp = employeesData.find((employee) => employee.id === Number(id));

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
