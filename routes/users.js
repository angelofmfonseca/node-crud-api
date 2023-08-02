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

router.get("/users", (req, res) => {
  console.log(users);
  res.send(users);
});

export default router;
