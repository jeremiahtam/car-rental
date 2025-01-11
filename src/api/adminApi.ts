import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchAdmin = createAsyncThunk('admin/fetchAdmin', async (_, thunkApi) => {
  try {
    const storedAdminData = localStorage.getItem('2ax')
    const token = storedAdminData != null ? storedAdminData : null;
    const res = await axios.get(`${baseUrl}/api/admin-info`,
      {
        params: {
          token: token
        },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
      });
    return res.data
  } catch (e: any) {
    if (e.code === "ECONNABORTED") {
      thunkApi.rejectWithValue('Request timed out')
    }
    if (e?.response?.data !== undefined) {
      const errorData = e.response.data;
      if (errorData.message === "Unauthenticated.") {
        thunkApi.rejectWithValue('Login required')
      }
      thunkApi.rejectWithValue(e)
    }
  }
})