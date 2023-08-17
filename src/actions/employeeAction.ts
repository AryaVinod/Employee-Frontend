import { createAction } from '@reduxjs/toolkit';

type addEditEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  experience: string;
  role: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
};

type deleteEmployeeType = {
  id: number;
};

export const addEmployee = createAction<{ employee: addEditEmployeeType }>('Employee:Create');
export const editEmployee = createAction<{ employee: addEditEmployeeType }>('Employee:Edit');
export const deleteEmployee = createAction<{ employee: deleteEmployeeType }>('Employee:Delete');

// export default addEmployee;
// export default EditEmployee
