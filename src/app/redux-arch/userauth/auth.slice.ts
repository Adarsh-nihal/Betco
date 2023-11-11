import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "universal-cookie";
import axios from "axios";
import { fetchGetRequest, sendPatchRequest } from "@/app/api/api";

const cookies = new Cookies();
export const setUserCookie = (name: string, value: any, options?: any) => {
  cookies.set(name, value, options);
};

export const getUserCookie = (name: string): any => {
  return cookies.get(name);
};

export const removeUserCookie = (name: string, options?: any) => {
  cookies.remove(name, options);
};


let data={
  token: null,
  loading: false,
  fetchLoading: false,
  fetchError: null,
  message: "Login successfully",
  data: {
    token: "eyJhbGciOiJIUzI1NiJ9.c3V2YW1zd2FnYXRhbXBAZ21haWwuY29t.rvwdBnONbQrAwqYrm6MmN5LV4O4oEHNPDW6Z0oHGjBs",
    username: "suvamswagatamp",
    otpless_token: "836988ea30c24d1b9c09373125a4d161"
  },
  error: null,
  status: 200,
  success: true,
  user: {
    _id: "6534dd6cc344700c439259ba",
    first_name: "Suvam",
    username: "suvamswagatamp",
    password: "",
    user_id: "e9cd6200-57f4-44d8-924a-11abfe5eae76",
    email: "suvamswagatamp@gmail.com",
    phone: "917008369373",
    city: "",
    country: "",
    bank_name: "",
    bank_holder: "",
    account_number: "",
    ifsc_code: "",
    joined_at: "2023-10-22 01:59:32 PM",
    updated_at: "2023-10-22 01:59:32 PM",
    status: true,
    state: "",
    bet_supported: true,
    is_blocked: true,
    kyc_verified: false,
    sms_verified: true,
    is_online: true,
    last_seen: "2023-10-22 01:59:32 PM",
    profile_picture: "",
    referral_code: "suvamswagatamp",
    amount: 572,
    exposure_limit: 0,
    max_limit: 1000,
    min_limit: 100,
    __v: 0,
    refer_by: ""
  },
  redirect: "/sports"
}

interface AuthState {
  token: string | null;
  loading: boolean;
  message: string | null;
  error: string | null;
  data: any | null;
  fetchLoading: boolean;
  fetchError: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  fetchLoading: false,
  fetchError: null,
  message: "",
  data: data|| getUserCookie("userData") || {},
  error: null,
};

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`; // Replace this with your API base URL

export const loginAsync = createAsyncThunk(
  "userlogin",
  async (credentials: {
    email: String;
    first_name: String;
    last_name: String;
    phone: String;
    otpless_token: String;
  }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/user/user-login`,
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      // Handle authentication errors here, if any
      console.log(error, error);
      return error.response.data;
    }
  }
);

export const updateUserDataAsync = createAsyncThunk(
  "user/updateUserData",
  async (updatedData: any) => {
    try {
      const response = await sendPatchRequest(
        `${API_BASE_URL}/api/user/update-user-data`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchUserDataAsync = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      const response = await fetchGetRequest(
        `${API_BASE_URL}/api/user/get-single-user/e9cd6200-57f4-44d8-924a-11abfe5eae76`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "userauth",
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
        state.token = action.payload.data.token;
        state.message = action.payload.message; // Set the message from the payload
        state.data = action.payload;
        setUserCookie("userData", action.payload, { path: "/" });
        // Cookies.set("token", action.payload.token); // Save token in cookie
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
        state.message = null; // Reset message on rejection
      })
      .addCase(updateUserDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        setUserCookie("userData", action.payload, { path: "/" });
      })
      .addCase(updateUserDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Update failed";
      })
      .addCase(fetchUserDataAsync.pending, (state) => {
        state.fetchLoading = true;
        state.fetchError = null;
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.fetchLoading = false;
        const data = {
          ...state, ...state.data, user: action.payload
        };
        state.data=data
        // setUserCookie("userData", action.payload, { path: "/" });
      })
      .addCase(fetchUserDataAsync.rejected, (state, action) => {
        state.fetchLoading = false;
        state.fetchError = action.error.message || "Fetch failed";
      });
  },
});

// export const selectUserLoginToken = (state: RootState) =>
//   state.combineR.auth.token;
// export const selectUserLoginLoading = (state: RootState) =>
//   state.combineR.auth.loading;
// export const selectUserLoginError = (state: RootState) =>
//   state.combineR.auth.error;

export default authSlice.reducer;