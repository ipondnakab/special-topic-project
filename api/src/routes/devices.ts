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
      where: {
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

route.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const device = await Devices.update(data, {
      where: {
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

route.post("/", async (req, res) => {
  const data = req.body;
  try {
    const device = await Devices.create(data);
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
    const device = await Devices.destroy({
      where: {
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
