import * as express from "express";
import devices from "./devices";
import transaction from "./transaction";

const router = express.Router();

router.use("/devices", devices);
router.use("/transaction", transaction);

export default router;
