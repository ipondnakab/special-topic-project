import { Where } from "./../../node_modules/sequelize/types/utils.d";
import { Update } from "./../../../ui/node_modules/history/index.d";
import * as express from "express";
import Devices from "../models/Devices";

const route = express.Router();

route.get("/", async (_, res) => {
  try {
    const devices = await Devices.findAll();
    res.json(devices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const devices = await Devices.findAll({
      Where: {
        deviceId: id,
      },
    });
    res.json(devices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.patch("/update", async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const devices = await Devices.update({
      firstName: firstName || "John",
      lastName: lastName || "Hancock",
    });
    res.json(devices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.post("/create", async (req, res) => {
  const {
    name,
    ipAddress,
    wifiName,
    statusRelay1,
    statusRelay2,
    statusRelay3,
    statusRelay4,
  } = req.body;
  try {
    const device = await Devices.create({
      name: name,
      ipAddress: ipAddress,
      wifiName: wifiName,
      statusRelay1: statusRelay1,
      statusRelay2: statusRelay2,
      statusRelay3: statusRelay3,
      statusRelay4: statusRelay4,
    });
    res.json(device);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const device = await Devices.delete({
      Where: {
        deviceId: id,
      },
    });
    res.json(device);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default route;
