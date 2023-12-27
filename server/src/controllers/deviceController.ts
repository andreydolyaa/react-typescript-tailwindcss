import { Device, IDevice } from "../models/deviceModel";
import { Controller } from "../types/types";

export const getDevices: Controller = async (req, res, next) => {
  try {
    const data: IDevice[] = await Device.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
