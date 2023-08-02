import express from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  const id = uuid();
  users.push({ ...user, id });
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
});

export default router;
