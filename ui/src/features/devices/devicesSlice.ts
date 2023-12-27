import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { AxiosError } from "axios";
import { LoadingError, ErrorBase } from "../employees/employeesSlice";

export interface Device {
  type: string;
  deviceIdentifier: string;
  osVersion: String;
  userInfo: {
    username: string;
  };
  upTime: string;
  totalMemory: Number;
  freeMemory: Number;
  osRelease: String;
  architecture: String;
  hostName: String;
  homeDir: String;
  sessionId: String;
  cpus: [Object];
  networkInterfaces: Object;
  cpuUsage: Object;
  nodeProcessUpTime: Number;
  ipAddress: String;
  connected: Boolean;
  systemLoad: [Number];
  cpuUsageCalculated: [Number];
  _id: any;
}

export interface Devices {
  devices: Device[];
}

export const getDevices = createAsyncThunk("getDevice", async () => {
  try {
    const response = await api.get("/api/devices");
    return response.data;
  } catch (error) {
    const { message } = error as ErrorBase<Error | AxiosError>;
    throw message || "Error occurred";
  }
});

export const initialState: Devices & LoadingError = {
  devices: [],
  loading: false,
  error: null,
};

export const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    deviceUpdate: (state, { payload }) => {
      const updated = state.devices.map((device) => {
        if (device._id === payload._id) {
          return { ...device, ...payload };
        }
        return device;
      });

      if (!state.devices.some((device) => device._id === payload._id)) {
        updated.push(payload);
      }

      return { ...state, devices: updated };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDevices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDevices.fulfilled, (state, { payload }) => {
        state.devices = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getDevices.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      });
  },
});
export const { deviceUpdate } = devicesSlice.actions;
export default devicesSlice.reducer;
