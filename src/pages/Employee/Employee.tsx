import { FC } from 'react';
import './Styles.css';
import EmployeeLayout from '../../layout/Employee-layout/Employee';
import TableTitle from '../../components/Table-title/Table-title';
import TableEntry from '../../components/Table-Entry/Table-entry';
import SubHeader from '../../components/Sub-header/Sub-header';
import { useSelector } from 'react-redux';

const Employee: FC = () => {
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  return (
    <div>
      <EmployeeLayout>
        <SubHeader label='Employee List' />
        <TableTitle />
        {employeesData.map((employee) => (
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
