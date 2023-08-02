import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server listening on port: http://localhost:${PORT}`),
);
