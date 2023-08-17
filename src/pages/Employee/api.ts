import baseApi from '../../services';

// interface Employee {
//   id: number;
//   name: string;
//   joiningDate: string;
//   experience: string;
//   role: string;
//   address: {
//     addressLine1: string;
//     addressLine2: string;
//     city: string;
//     state: string;
//     country: string;
//     pincode: string;
//   };
// }

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<any, void>({
      query: () => '/employees'
    }),
    getEmployeeDetails: builder.query<any, string>({
      query: (id) => `/employees/${id}`
    })
  })
});

export const { useGetEmployeeListQuery, useGetEmployeeDetailsQuery } = employeeApi;
