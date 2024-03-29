const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route  GET /api/contacts
// @desc   Get all user's contacts
// @access Private
router.get('/', auth, async (req, res) => {
	// res.send('Gets all contacts')
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
		res.json(contacts)
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error')
	}
})

// @route  POST /api/contacts
// @desc   Add a contact
// @access Private
router.post('/', [auth, [
	check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
	// res.send('Added a new contact')
	const errors = validationResult(req)
	if (!errors.isEmpty()) return res.status(400).json({ erros: errors.array() })
	const { name, email, phone, type } = req.body
	try {
		const newContact = new Contact({
			name, email, phone, type, user: req.user.id
		})
		const contact = await newContact.save()
		res.json(contact)
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error')
	}
})

// @route  PUT /api/contacts/:id
// @desc   Update a contact
// @access Private
router.put('/:id', (req, res) => {
	res.send('Update contact')
})

// @route  DELETE /api/contacts/:id
// @desc   DELETE a contact
// @access Private
router.delete('/:id', (req, res) => {
	res.send('Delete contact')
})
module.exports = router