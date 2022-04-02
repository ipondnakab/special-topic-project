import * as express from "express";
import devices from "./devices";
import transaction from "./transaction";
import user from "./user";

const router = express.Router();

router.use("/user", user);
router.use("/devices", devices);
router.use("/transaction", transaction);

export default router;
