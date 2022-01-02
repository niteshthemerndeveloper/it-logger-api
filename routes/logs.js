const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Log = require('../models/Log.js');

// Perform CRUD Operations;

// @route     GET api/logs --> READ
// @desc      Get the logs/issues from API
// @access    Public
router.get('/', async (req, res) => {
  const logs = await Log.find().sort({ date: -1 });
  try {
    res.json({ logs });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Failed to Respond!');
  }
});

// @route     POST api/logs --> CREATE
// @desc      Create a new log
// @access    Public
router.post(
  '/',
  [
    check('name', 'Please enter a name').notEmpty(),
    check('log', 'Please enter log details').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // check if errors not empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, log, priority } = req.body;
    try {
      // This is unnecessary code
      if (!log || !name) {
        return res.status(400).json({ msg: 'Log details are not valid' });
      }

      const newLog = await new Log({
        name,
        log,
        priority,
      });

      const logCreated = await newLog.save();

      res.json({ Log: logCreated });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Failed to Respond!');
    }
  }
);

// @route     DELETE api/logs/:id --> DELETE
// @desc      Delete a log from the server
// @access    Public
router.delete('/:id', async (req, res) => {
  const log = await Log.findById(req.params.id);

  try {
    // Check if log not exists
    if (!log) {
      return res.status(404).json({ msg: 'Log Not Found' });
    }

    await Log.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Log has been Deleted.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Failed to Respond!');
  }
});

module.exports = router;
