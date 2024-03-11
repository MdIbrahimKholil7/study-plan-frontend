import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../utils/types";
// import { User } from "../../../types/userType";
export interface StudySession {
  _id: Key | null | undefined;
  subject: string;
  duration: number; // in minutes
  priority: number;
}

interface State {
  study: StudySession[];
}

const initialState: State = {
  study: [
    {
      subject: "",
      duration: 0,
      priority: 1,
    },
  ],
};

const authSlice = createSlice({
  name: "studyPlan",
  initialState,
  reducers: {
    addStudyData: (state, action) => {
      state.study = action.payload;
    },
  },
});

export const { addStudyData } = authSlice.actions;
export default authSlice.reducer;
