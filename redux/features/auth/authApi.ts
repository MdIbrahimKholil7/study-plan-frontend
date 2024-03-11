import { User } from "../../../utils/types";
import apiSlice from "../../app/apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUpUser: builder.mutation<string, any>({
      query: (data: User) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation<string, any>({
      query: (data: User) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query<string, any>({
      query: () => "/user/details",
    }),
  }),
});

export const { useSignUpUserMutation, useLoginUserMutation, useGetUserQuery } =
  authSlice;
