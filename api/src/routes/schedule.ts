import * as express from "express";
import { Schedules } from "../database";

const route = express.Router();

route.get("/", async (_, res) => {
  try {
    const schedules = await Schedules.findAll();
    res.json(schedules);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const schedules = await Schedules.findAll({
      where: {
        deviceId: id,
      },
    });
    res.json(schedules);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.post("/", async (req, res) => {
  const data = req.body;
  try {
    const schedules = await Schedules.create(data);
    res.json(schedules);
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
  try {
    const schedules = await Schedules.update(data, {
      where: {
        id: Number(id),
      },
    });
    res.json(schedules);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const schedules = await Schedules.destroy({
      where: {
        id,
      },
    });
    res.json(schedules);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
export default route;
