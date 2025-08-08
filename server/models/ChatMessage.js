const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  // Optional: message type (text, image, file, etc.)
  messageType: {
    type: String,
    enum: ['text', 'image', 'file'],
    default: 'text'
  },
  // Optional: file URL if messageType is image or file
  fileUrl: {
    type: String
  }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
