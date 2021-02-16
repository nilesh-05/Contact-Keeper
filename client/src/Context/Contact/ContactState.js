import React, { useReducer } from 'react'
import uuid from 'uuid'
import contactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types'

const contactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Nilesh',
				email: 'nilesh@gmail.com',
				phone: '1234567890',
				type: 'professional'
			},
			{
				id: 2,
				name: 'Harpreet',
				email: 'happpy@gmail.com',
				phone: '9876543210',
				type: 'professional'
			},
			{
				id: 3,
				name: 'Mridul',
				email: 'mridul@gmail.com',
				phone: '9874563210',
				type: 'personal'
			}
		]
	}
	const [state, dispatch] = useReducer(ContactReducer, initialState)


	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts
			}}
		>
			{props.childern}
		</contactContext.Provider>
	)
}

export default contactState