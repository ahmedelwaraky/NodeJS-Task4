const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

// create user
router.post("/", async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);

    if (!newUser) throw new Error("wrong");
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(500).json({ err });
  }
});

//read or Find All User
router.get("/", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(201).json({ allUsers });
    if (!allUser) throw new Error("Don't Find ALl User");
  } catch (err) {
    res.status(500).json({ err });
  }
});

//read or Find user
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await userModel.findById(id);
    res.status(201).json({ findUser });

    if (!findUser) throw new Error("Id not found");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//Update User
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userUpdated = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(userUpdated);
    if (!userUpdated) throw new Error("id Not Found");
  } catch (err) {
    res.status(500).json({ err });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete(id)
    res.status(201).json();
    if(!deleteUser) throw new Error("id not Found")
  } catch (error) {
    res.status(500).json({ err });
  }
});

module.exports = router;
