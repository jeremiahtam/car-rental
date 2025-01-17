import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchUser = createAsyncThunk('user/fetchUser', async (_, thunkApi) => {
  try {
    const storedUserToken = localStorage.getItem('1ux')
    const token = storedUserToken != null ? storedUserToken : null;
    if (token === null) {
      return thunkApi.rejectWithValue('No stored token')
    }
    const res = await axios({
      method: 'get',
      url: `${baseUrl}/api/user-info`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      timeout: 30000,
    });
    console.log(res.data.data)
    return res.data.data
  } catch (e: any) {
    console.log(e)
    if (e.code === "ECONNABORTED") {
      return thunkApi.rejectWithValue('Request timed out')
    }
    if (e?.response?.data !== undefined) {
      const errorData = e.response.data;
      if (errorData.message === "Unauthenticated.") {
        return thunkApi.rejectWithValue('Login required')
      }
      return thunkApi.rejectWithValue(e)
    }
    return thunkApi.rejectWithValue(e)
  }
})