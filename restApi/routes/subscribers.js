const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// get all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// get one
router.get('/:id', getSubscriber, (req, res) => {
  res.send(res.subscriber);
});

// create one
router.post('/', async (req, res) => {
  const subscriber = new Subscriber();
  for (var key of Object.keys(req.body)) {
    if (req.body[key] != null) {
      subscriber[key] = req.body[key];
    }
  }
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  res.send(req.params.id);
});
// update one
router.patch('/:id', getSubscriber, async (req, res) => {
  for (var key of Object.keys(req.body)) {
    if (req.body[key] != null) {
      res.subscriber[key] = req.body[key];
    }
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete one
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: 'cannot find subscriber' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
}

module.exports = router;
