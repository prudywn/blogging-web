const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const notificationsRoutes = require('./routes/notificationsRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000/', // Replace with your GitHub Pages URL
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '60mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api/notifications', notificationsRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/posts', postRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Endpoint for generating text
app.post('/generate', async (req, res) => {
  const inputText = req.body.input; // Extracting the input text from the request body

  if (!inputText) {
    return res.status(400).json({ error: 'Input text is required' }); // Respond with 400 error if input text is missing
  }

  // Construct the payload with the instruction and user input
  const payload = {
    inputs: `[INST] <<SYS>> You are a helpful chatbot that assists in creating blogs. When someone greets you, respond with 'Hello, how can I help you with your blog today?'. For other inputs, provide relevant advice or suggestions for creating blog content. <<SYS>> ${inputText} [/INST]`,
    parameters: {
      max_new_tokens: 256, // Maximum number of new tokens to generate
      top_p: 0.9, // Top-p sampling value
      temperature: 0.7 // Sampling temperature
    }
  };

  try {
    // Making a POST request to the Hugging Face Inference API with the constructed payload
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf',
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.LLAMA2_TOKEN}`, // Authorization header with the Bearer token
          'Content-Type': 'application/json' // Content-Type header
        }
      }
    );

    // Extract the generated text after the instruction
    const generatedText = response.data[0].generated_text.split('[/INST] ')[1];
    res.json({ response: generatedText }); // Sending the generated text back in the response
  } catch (error) {
    console.error(error); // Logging the error to the console
    res.status(500).json({ error: 'Error generating text' }); // Responding with 500 error if there is an issue
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
