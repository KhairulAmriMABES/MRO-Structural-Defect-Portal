const mongoose = require('mongoose');

const WorkorderSchema = new mongoose.Schema({
  workorderId: {
    type: String,
    required: true,
    unique: true
  },
  aircraftRegistration: {
    type: String,
    required: true
  },
  aircraftType: {
    type: String,
    required: true
  },
  defectDescription: {
    type: String,
    required: true
  },
  defectLocation: {
    frame: {
      type: String,
      required: true
    },
    stringer: {
      type: String,
      required: true
    },
    lateral: {
      type: String,
      required: true,
      enum: ['Left', 'Right', 'Center']
    },
    longitudinal: {
      type: String,
      required: true
    }
  },
  defectType: {
    type: String,
    required: true,
    enum: ['Crack', 'Corrosion', 'Dent', 'Delamination', 'Scratch', 'Other']
  },
  defectDimension: {
    length: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    depth: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true,
      default: 'mm',
      enum: ['mm', 'inch']
    }
  },
  reportedDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'In Progress', 'Pending Review', 'Closed'],
    default: 'Open'
  },
  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium'
  },
  assignedTo: {
    type: String,
    default: ''
  },
  images: [{
    type: String
  }],
  notes: [{
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model('Workorder', WorkorderSchema);
