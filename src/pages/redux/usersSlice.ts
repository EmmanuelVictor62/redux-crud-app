import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  users: Array<{}>;
  user: any;
  loading: boolean;
  error: boolean;
}

const initialState: initialStateProps = {
  users: [],
  user: 0,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialApiCall: (state) => {
      (state.loading = false), (state.error = false);
    },
  },
});

export const { initialApiCall } = userSlice.actions;

export default userSlice.reducer;
