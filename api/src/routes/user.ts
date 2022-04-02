// import * as express from "express";
// import User from "../models/User";

// const route = express.Router();

// route.get("/", async (_, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// route.post("/create", async (req, res) => {
//   const { firstName, lastName } = req.query;
//   try {
//     const user = await User.create({
//       firstName: firstName || "John",
//       lastName: lastName || "Hancock",
//     });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// export default route;
