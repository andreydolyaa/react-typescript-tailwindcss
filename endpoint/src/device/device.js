import os from "os";

class Device {
  constructor() {}
  static get deviceIdentifier() {
    return process.env.DEVICE_IDENTIFIER;
  }
  static get osVersion() {
    return os.version();
  }
  static get userInfo() {
    return os.userInfo();
  }
  static get upTime() {
    return os.uptime();
  }
  static get totalMemory() {
    return os.totalmem();
  }
  static get freeMemory() {
    return os.freemem();
  }
  static get osRelease() {
    return os.release();
  }
  static get architecture() {
    return os.machine();
  }
  static get hostName() {
    return os.hostname();
  }
  static get homeDir() {
    return os.homedir();
  }
  static get cpus() {
    return os.cpus();
  }
  static get networkInterfaces() {
    return os.networkInterfaces();
  }
  static get cpuUsage() {
    return process.cpuUsage();
  }
  static get envs() {
    return process.env;
  }
  static get nodeProcessUpTime() {
    return process.uptime();
  }
  static get systemLoad() {
    return os.loadavg();
  }
  static get cpuUsageCalculated() {
    return Device.cpus.map((core) => {
      const total =
        core.times.user + core.times.nice + core.times.sys + core.times.idle;
      const idle = core.times.idle;
      return 100 - (idle / total) * 100;
    });
  }
  static get ipAddress() {
    const interfaces = Device.networkInterfaces;
    const ip = Object.values(interfaces)
      .flat()
      .find(
        (networkInterface) =>
          networkInterface.family === "IPv4" && !networkInterface.internal
      ).address;
    return ip;
  }
}

export default Device;
