import { IDevice } from "../models/deviceModel";
import { Device } from "../models/deviceModel";
import { server } from "../init";

export const handleIncomingMessage = async (message: IDevice) => {
  return await writeIncomingMessageToDB(message);
};

const writeIncomingMessageToDB = async (message: IDevice) => {
  try {
    const filter = {
      deviceIdentifier: message.deviceIdentifier,
    };
    const result = await Device.findOneAndUpdate(filter, message, {
      new: true,
      upsert: true,
    })
      .exec()
      .then((data) => server.send(data))
      .catch(() => {
        throw new Error("Failed to write message to DB!");
      });
  } catch (error: any) {
    console.error(error?.message);
    return { error };
  }
};

export const handleDeviceConnectionState = async (sessionId: string) => {
  try {
    const result = await Device.findOneAndUpdate(
      { sessionId },
      { connected: false, sessionId: null },
      { new: true }
    )
      .exec()
      .then((data) => server.send(data))
      .catch(() => {
        throw new Error("Failed to update device, no device with this sessionId!");
      });
  } catch (error: any) {
    console.error(error?.message);
    return { error };
  }
};
