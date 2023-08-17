import baseApi from '../../services';

type AddEmpPayloadType = {
  name: string;
  username: string;
  password: string;
  experience: number;
  department_id: number;
  role: string;
  joiningDate: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
};

type EditEmpPayloadType = {
  id: number;
  body: {
    name: string;
    username: string;
    password: string;
    experience: number;
    departmetId: number;
    role: string;
    joiningDate: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
  };
};

export const AddEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addEmployee: builder.mutation({
      query: (body: AddEmpPayloadType) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Employee']
    })
  })
});

export const EditEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployee: builder.mutation({
      query: ({ body, id }: EditEmpPayloadType) => ({
        url: `/employees/${id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Employee']
    })
  })
});

export const { useAddEmployeeMutation } = AddEmployeeApi;
export const { useEditEmployeeMutation } = EditEmployeeApi;
