import baseApi from '../../services';

export const DeleteEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteEmployee: builder.mutation({
      query: (id: number) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Employee']
    })
  })
});

export const { useDeleteEmployeeMutation } = DeleteEmployeeApi;
