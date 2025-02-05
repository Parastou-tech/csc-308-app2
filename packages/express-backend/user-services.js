// routes/users.js
const express = require('express');
const router = express.Router();
const {
  findAllUsers,
  findUsersByName,
  findUsersByJob,
  findUsersByNameAndJob,
  findUserById,
  createUser,
  deleteUserById
} = require('../services/user-services');

router.get('/', (req, res) => {
  const { name, job } = req.query;

  if (name && job) {
    return findUsersByNameAndJob(name, job)
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  }
  if (name) {
    return findUsersByName(name)
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  }
  if (job) {
    return findUsersByJob(job)
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  }
  return findAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  findUserById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/', (req, res) => {
  const { name, job } = req.body;
  createUser({ name, job })
    .then(newUser => res.status(201).json(newUser))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  deleteUserById(id)
    .then(deletedUser => {
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully.' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;