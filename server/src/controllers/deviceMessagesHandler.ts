import { IDevice } from "../models/deviceModel";
import { Device } from "../models/deviceModel";

export const handleIncomingMessage = async (message: IDevice) => {
  return await writeIncomingMessageToDB(message);
};

const writeIncomingMessageToDB = async (message: IDevice) => {
  try {
    const filter = { deviceIdentifier: message.deviceIdentifier };
    await Device.findOneAndUpdate(filter, message, { new: true, upsert: true });
  } catch (error) {
    throw error;
  }
};
