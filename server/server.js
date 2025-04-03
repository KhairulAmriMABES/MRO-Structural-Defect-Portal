const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Workorder = require('./models/Workorder');
const sampleWorkorders = require('./data/sampleWorkorders');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (commented out for now as we're using in-memory data)
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// In-memory data store (for demo purposes)
let workorders = [...sampleWorkorders];

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Aircraft Structural Damage Findings API' });
});

// Workorder Routes
app.get('/api/workorders', (req, res) => {
  res.json(workorders);
});

app.get('/api/workorders/:id', (req, res) => {
  const workorder = workorders.find(wo => wo.workorderId === req.params.id);
  if (!workorder) {
    return res.status(404).json({ msg: 'Workorder not found' });
  }
  res.json(workorder);
});

app.post('/api/workorders', (req, res) => {
  const newWorkorder = req.body;
  workorders.push(newWorkorder);
  res.status(201).json(newWorkorder);
});

app.put('/api/workorders/:id', (req, res) => {
  const index = workorders.findIndex(wo => wo.workorderId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ msg: 'Workorder not found' });
  }
  workorders[index] = { ...workorders[index], ...req.body };
  res.json(workorders[index]);
});

app.delete('/api/workorders/:id', (req, res) => {
  const index = workorders.findIndex(wo => wo.workorderId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ msg: 'Workorder not found' });
  }
  workorders = workorders.filter(wo => wo.workorderId !== req.params.id);
  res.json({ msg: 'Workorder removed' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
