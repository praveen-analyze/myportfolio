const express = require('express');
const { body } = require('express-validator');
const adminAuth = require('../middleware/adminAuth');
const { createContact, getContacts, updateContactStatus } = require('../controllers/contactController');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('phone').trim().notEmpty().withMessage('Phone is required'),
    body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email'),
    body('projectType').notEmpty().withMessage('Project type is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
  ],
  createContact
);

router.get('/', adminAuth, getContacts);
router.patch('/:id', adminAuth, updateContactStatus);

module.exports = router;
