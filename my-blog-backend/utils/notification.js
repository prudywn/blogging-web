const Notification = require('../models/Notification');

const createNotification = async (userId, type, postId = null, authorId = null) => {
  const notification = new Notification({
    userId,
    type,
    postId,
    authorId,
  });
  await notification.save();
};

module.exports = { createNotification };
