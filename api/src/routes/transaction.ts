import { Where } from "./../../node_modules/sequelize/types/utils.d";
import * as express from "express";
import Transaction from "../models/Transaction";

const route = express.Router();

route.get("/", async (_, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transactions = await Transaction.findAll({
      Where: {
        deviceId: id,
      },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.post("/create", async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const transaction = await Transaction.create({
      firstName: firstName || "John",
      lastName: lastName || "Hancock",
    });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default route;
