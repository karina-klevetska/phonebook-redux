// import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { addContact, deleteContact, filterValue } from './actions'

export const contactsList = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
})

export const contactFilter = createReducer('', {
  [filterValue]: (_, { payload }) => payload,
})

// const contactsList = (state = [], action) => {
//   switch (action.type) {
//     case 'contact/add':
//       return [...state, action.payload]
//       break
//     case 'contact/delete':
//       return state.filter((contact) => contact.id !== action.payload.id)
//       break
//     default:
//       return state
//   }
// }
