const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Only used for local authentication
  name: { type: String },
  googleId: { type: String },
  githubId: { type: String },
  refreshToken: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
