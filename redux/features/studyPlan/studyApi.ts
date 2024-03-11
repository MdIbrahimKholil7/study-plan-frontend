import apiSlice from "../../app/apiSlice";

export const studySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudyPlan: builder.query<string, any>({
      query: () => "/study",
    }),
  }),
});

export const { useGetStudyPlanQuery } = studySlice;
