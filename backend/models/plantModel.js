const mongoose = require('mongoose');

const plantSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    description: {
      type: String,
      required: [true, 'add description value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Plant', plantSchema);
