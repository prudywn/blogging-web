// controllers/userController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const updateUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username && !email && !password && !req.file) {
      return res.status(400).json({ message: 'Nothing to update' });
    }
    const user = await User.findById(req.user.id);
    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);
    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { updateUser };
