const initialState = [
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

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Employee:Create': {
      const newState = [...state, action.payload.employee];

      return newState;
    }

    case 'Employee:Delete': {
      const newState = state.filter((employee) => employee.id != action.payload.employee.id);

      return newState;
    }

    case 'Employee:Edit': {
      const updatedEmployee = action.payload.employee;
      const newState = state.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      );

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;