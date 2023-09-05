const express = require("express");
const router = express.Router();
const postModel = require("../models/postModel");

//create user
router.post("/", (req, res) => {
  postModel
    .create(req.body)
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

//read or Find All Posts
router.get("/", (req, res) => {
  postModel
    .find()
    .then((allPosts) => {
      res.status(201).json({ allPosts });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});
16 - // res.send(allUsers)  old response


  //read or Find user
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    postModel
      .findById(id).populate('userId')
      .then((posts) => {   //no error excute inside then
        res.status(201).json(posts);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });

//Update User
router.put("/:id", (req, res) => {
  const id = req.params.id;
  postModel
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

//delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  postModel
    .findByIdAndDelete(id)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

module.exports = router;
