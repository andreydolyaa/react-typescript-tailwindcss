import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

interface Employee {}

interface Employees {
  employees: Employee[];
  loading: boolean;
  error: null | string;
}

export const getEmployees = createAsyncThunk("getEmployees", async () => {
  const response = await api.get("/api/employees");
  return response.data;
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
      .addCase(getEmployees.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      });
  },
});

export default employeesSlice.reducer;
