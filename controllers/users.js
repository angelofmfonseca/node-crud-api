import { v4 as uuid } from "uuid";

let users = [];

export const getUser = (req, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
};

export const createUser = (req, res) => {
  const user = req.body;
  const id = uuid();
  users.push({ ...user, id });
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  firstName && (user.firstName = firstName);
  lastName && (user.lastName = lastName);
  age && (user.age = age);
  res.send(users);
};
