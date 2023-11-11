import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "universal-cookie";
import axios from "axios";

interface AuthState {
  token: string | null;
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  message: "",
  error: null,
};

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`; // Replace this with your API base URL

export const loginAsync = createAsyncThunk(
  "login",
  async (credentials: { email: String; password: String }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/user/admin-login`,
        credentials
      );
      console.log(response, "ress");
      return response.data;
    } catch (error: any) {
      // Handle authentication errors here, if any
      return error.response.data;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null; // Reset message on pending
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.message = action.payload.message; // Set the message from the payload
        setCookie("token", action.payload.token, { path: "/" });
        // Cookies.set("token", action.payload.token); // Save token in cookie
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
        state.message = null; // Reset message on rejection
      });
  },
});

const cookies = new Cookies();
export const setCookie = (name: string, value: string, options?: any) => {
  cookies.set(name, value, options);
};

export const getCookie = (name: string): string | undefined => {
  return cookies.get(name);
};

export const removeCookie = (name: string, options?: any) => {
  cookies.remove(name, options);
};

export const selectAdminLoginToken = (state: RootState) =>
  state.combineR.auth.token;
export const selectAdminLoginLoading = (state: RootState) =>
  state.combineR.auth.loading;
export const selectAdminLoginError = (state: RootState) =>
  state.combineR.auth.error;

export default authSlice.reducer;
