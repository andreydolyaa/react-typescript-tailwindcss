import { ObjectId, Schema, model } from "mongoose";

export interface IDevice {
  type: string;
  deviceIdentifier: string;
  osVersion: String;
  userInfo: Object;
  upTime: Number;
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
  id: any;
}

const deviceSchema = new Schema<IDevice>(
  {
    deviceIdentifier: {
      type: String,
      unique: true,
      required: true,
    },
    osVersion: String,
    userInfo: Object,
    upTime: Number,
    totalMemory: Number,
    freeMemory: Number,
    osRelease: String,
    architecture: String,
    hostName: String,
    homeDir: String,
    sessionId: String,
    cpus: [Object],
    networkInterfaces: Object,
    cpuUsage: Object,
    nodeProcessUpTime: Number,
    ipAddress: String,
    connected: Boolean,
    systemLoad: [Number],
    cpuUsageCalculated: [Number],
    // id: {
    //   type: String,
    //   default: function () {
    //     return this._id;
    //   },
    //   index: true,
    // },
  },
  { versionKey: false }
);

export const Device = model("Device", deviceSchema);
