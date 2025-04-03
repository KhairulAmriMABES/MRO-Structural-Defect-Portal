const express = require('express');
const router = express.Router();
const Workorder = require('../models/Workorder');

// Get all workorders
router.get('/', async (req, res) => {
  try {
    const workorders = await Workorder.find().sort({ reportedDate: -1 });
    res.json(workorders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get single workorder by ID
router.get('/:id', async (req, res) => {
  try {
    const workorder = await Workorder.findById(req.params.id);
    if (!workorder) {
      return res.status(404).json({ msg: 'Workorder not found' });
    }
    res.json(workorder);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Workorder not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Create a workorder
router.post('/', async (req, res) => {
  try {
    const newWorkorder = new Workorder(req.body);
    const workorder = await newWorkorder.save();
    res.json(workorder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a workorder
router.put('/:id', async (req, res) => {
  try {
    const workorder = await Workorder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!workorder) {
      return res.status(404).json({ msg: 'Workorder not found' });
    }
    res.json(workorder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a workorder
router.delete('/:id', async (req, res) => {
  try {
    const workorder = await Workorder.findById(req.params.id);
    if (!workorder) {
      return res.status(404).json({ msg: 'Workorder not found' });
    }
    await workorder.deleteOne();
    res.json({ msg: 'Workorder removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
