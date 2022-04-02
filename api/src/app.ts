import * as express from "express";
import * as cors from "cors";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use(routes);

export default app;
