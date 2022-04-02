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

route.post("/create", async (req, res) => {
  const { firstName, lastName } = req.query;
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
