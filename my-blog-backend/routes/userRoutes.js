// routes/userRoutes.js
const express = require('express');
const { updateUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multerConfig'); // Assuming you have a Multer configuration for file uploads

const router = express.Router();

// Update user route
router.put('/update', authMiddleware, upload.single('profilePic'), updateUser);

module.exports = router;
