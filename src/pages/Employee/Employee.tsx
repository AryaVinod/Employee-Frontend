import { FC } from 'react';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import TableTitle from '../../components/Table-title/Table-title';
import TableEntry from '../../components/Table-Entry/Table-entry';
import SubHeader from '../../components/Sub-header/Sub-header';

const Employee: FC = () => {
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

  return (
    <div>
      <EmployeeLayout>
        <SubHeader label='Employee List' />
        <TableTitle />
        {data.map((employee) => (
          <TableEntry
            key={employee.id}
            id={employee.id}
            name={employee.name}
            joiningDate={employee.joiningDate}
            experience={employee.experience}
            role={employee.role}
          />
        ))}
      </EmployeeLayout>
    </div>
  );
};

export default Employee;
