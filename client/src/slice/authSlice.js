import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerData: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setRegisterData(state, action) {
      state.registerData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setLoading, setRegisterData, setToken } = authSlice.actions;
export default authSlice.reducer;
