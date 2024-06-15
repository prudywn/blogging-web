// routes/notification.js
const express = require('express');
const Notification = require('../models/Notification');
const Post = require('../models/Post');
const User = require('../models/User');
const router = express.Router();

// Create a notification when a post is liked
router.post('/like', async (req, res) => {
  const { userId, postId } = req.body;
  
  const notification = new Notification({
    userId: (await Post.findById(postId)).authorId,
    type: 'like',
    postId,
    authorId: userId,
  });

  await notification.save();
  res.status(201).send(notification);
});

// Create a notification when a post is commented
router.post('/comment', async (req, res) => {
  const { userId, postId, comment } = req.body;
  
  const notification = new Notification({
    userId: (await Post.findById(postId)).authorId,
    type: 'comment',
    postId,
    authorId: userId,
  });

  await notification.save();
  res.status(201).send(notification);
});

module.exports = router;
