import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { AxiosError } from "axios";

export interface Employee {}

export interface Employees {
  employees: Employee[];
  loading: boolean;
  error: null | string;
}

export interface ErrorBase<T> {
  error?: T;
  message: T;
}

export const getEmployees = createAsyncThunk("getEmployees", async () => {
  try {
    const response = await api.get("/api/employees");
    return response.data;
  } catch (error) {
    const { message } = error as ErrorBase<Error | AxiosError>;
    throw message || "Error occurred";
  }
});

const initialState: Employees = {
  employees: [],
  loading: false,
  error: null,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployees.fulfilled, (state, { payload }) => {
        state.employees = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getEmployees.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      });
  },
});

export default employeesSlice.reducer;
