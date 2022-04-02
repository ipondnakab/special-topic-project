import * as http from "http";
import app from "./app";
import * as database from "./database";
require("dotenv").config();

const port = process.env.PORT || 3080;

database.connection();

app.set("port", port);
const server = http.createServer(app);
server.listen(port);

server.on("listening", function (): void {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
});

module.exports = app;
