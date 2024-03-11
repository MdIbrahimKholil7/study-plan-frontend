import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../utils/types";
// import { User } from "../../../types/userType";

type State = {
  user: User | null | undefined;
  token?: string | null | undefined;
};
const initialState: State = {
  user: {
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      console.log(action.payload);
      state.token = action?.payload?.token;
      state.user = action?.payload?.data;
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
    addUserDetails: (state, action) => {
      state.token = JSON.parse(localStorage.getItem("token") || "");
      state.user = action.payload;
    },
  },
});

export const { userLoggedIn, userLoggedOut, addUserDetails } =
  authSlice.actions;
export default authSlice.reducer;
