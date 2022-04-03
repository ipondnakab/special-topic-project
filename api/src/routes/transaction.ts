import * as express from "express";
import { Transactions } from "../database";

const route = express.Router();

route.get("/", async (_, res) => {
  try {
    const transactions = await Transactions.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.get("/:id/latest", async (req, res) => {
  const { id } = req.params;
  try {
    const transactions = await Transactions.findAll({
      where: {
        deviceId: id,
      },
      order: [["id", "DESC"]],
      limit: 1,
    });
    console.log(transactions);

    if (!transactions.length) return res.json(null);
    res.json(transactions[0]);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transactions = await Transactions.findAll({
      where: {
        deviceId: id,
      },
    });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

route.post("/create", async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const transaction = await Transactions.create({
      firstName: firstName || "John",
      lastName: lastName || "Hancock",
    });
    res.json(transaction);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default route;
