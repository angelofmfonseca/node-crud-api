import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 19,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const { firstName, lastName, age } = req.body;
  users.push({ firstName, lastName, age });
  res.send(users);
});

export default router;
