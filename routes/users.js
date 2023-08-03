import express from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

let users = [];

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

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  firstName && (user.firstName = firstName);
  lastName && (user.lastName = lastName);
  age && (user.age = age);
  res.send(users);
});

export default router;
