import { createAction } from '@reduxjs/toolkit'

// export const addContact = (contact) => ({
//   type: 'contact/add',
//   payload: contact,
// })

// export const deleteProduct = (id) => ({
//   type: 'product/delete',
//   payload: { id },
// })

// export const filterValue = (value) => ({
//   type: 'filter/value',
//   payload: value,
// })

export const addContact = createAction('contact/add')
export const deleteContact = createAction('contact/delete')
export const filterValue = createAction('filter/value')
