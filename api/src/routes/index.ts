import * as express from "express";
import devices from "./devices";
import transaction from "./transaction";
import schedule from "./schedule";

const router = express.Router();

router.use("/devices", devices);
router.use("/transaction", transaction);
router.use("/schedules", schedule);

export default router;
