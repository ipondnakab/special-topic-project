import * as express from "express";
import { Devices } from "../database";

const route = express.Router();

route.get("/", async (_, res) => {
  try {
    const devices = await Devices.findAll({
      order: [["id", "ASC"]],
    });
    res.json(devices);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const devices = await Devices.findAll({
      where: {
        id,
      },
    });
    res.json(devices);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body as { [key: string]: any };
  Object.keys(data).forEach(
    (key) => data[key] === undefined && delete data[key]
  );
  console.log({ data, id });

  try {
    const device = await Devices.update(data, {
      where: {
        id: Number(id),
      },
    });
    res.json(device);
  } catch (error) {
    res.status(400).json({
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
    res.status(400).json({
      message: error.message,
    });
  }
});

route.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const device = await Devices.destroy({
      where: {
        id,
      },
    });
    res.json(device);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default route;
