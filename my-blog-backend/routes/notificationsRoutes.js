const express = require('express');
const Notification = require('../models/Notification');
const Post = require('../models/Post');
const router = express.Router();

// Create a notification when a post is liked
router.post('/like', async (req, res) => {
  try {
    const { userId, postId } = req.body;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).send('Post not found');

    const notification = new Notification({
      userId: post.authorId,
      type: 'like',
      postId,
      authorId: userId,
    });

    await notification.save();
    res.status(201).send(notification);
  } catch (error) {
    res.status(500).send({ error: 'Error creating notification' });
  }
});

// Create a notification when a post is commented
router.post('/comment', async (req, res) => {
  try {
    const { userId, postId } = req.body;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).send('Post not found');

    const notification = new Notification({
      userId: post.authorId,
      type: 'comment',
      postId,
      authorId: userId,
    });

    await notification.save();
    res.status(201).send(notification);
  } catch (error) {
    res.status(500).send({ error: 'Error creating notification' });
  }
});

router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.send(notifications);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching notifications' });
  }
});

module.exports = router;
