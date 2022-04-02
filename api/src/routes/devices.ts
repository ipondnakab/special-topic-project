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

route.post("/create", async (req, res) => {
  const { firstName, lastName } = req.query;
  try {
    const device = await Devices.create({
      firstName: firstName || "John",
      lastName: lastName || "Hancock",
    });
    res.json(device);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


export default route;
