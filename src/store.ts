import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import { employeeApi } from './pages/Employee/api';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), employeeApi.middleware]
});

// const addEmployee = createAction < { id: Number } > 'Employee:Create';

// console.log(addEmployee({ id: 1 }));

export default store;
