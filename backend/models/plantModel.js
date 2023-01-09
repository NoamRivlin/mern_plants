const mongoose = require('mongoose');

const plantSchema = mongoose.Schema(
  {
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
