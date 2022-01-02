const mongoose = require('mongoose');
const { Schema } = mongoose;

const LogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  log: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: 'normal',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Log', LogSchema);
