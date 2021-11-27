// import { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import './ContactForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/contacts/actions'
import { useState } from 'react'
import { getContacts } from '../../redux/contacts/selectors'

const ContactForm = () => {
  // state = {
  //   name: '',
  //   number: '',
  // }
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const nameId = shortid()
  const numberId = shortid()

  const handleChangeName = (e) => {
    // this.setState({
    //   name: e.target.value,
    // })
    setName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    // this.setState({
    //   number: e.target.value,
    // })
    setNumber(e.target.value)
  }

  const addNewContact = (contact) => dispatch(addContact(contact))

  const handleSubmit = (e) => {
    e.preventDefault()

    const contactObj = {
      id: shortid(),
      name,
      number,
    }

    // const banOnAddingDuplicateContact = (value) => {
    //   contacts.map((contact) => contact.name).includes(value.name)
    //     ? alert(`${value.name} is already in contacts`)
    //     : addNewContact(value)
    // }

    if (contacts.map((contact) => contact.name).includes(name)) {
      alert(`${name} is already in contacts`)
    } else {
      addNewContact(contactObj)
    }

    // banOnAddingDuplicateContact(contact)
    resetForm()
  }

  const resetForm = () => {
    // this.setState({ name: '', number: '' })
    setName('')
    setNumber('')
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label className='label' htmlFor={nameId}>
        Enter name
      </label>
      <input
        id={nameId}
        type='text'
        className='input'
        name='name'
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className='label' htmlFor={numberId}>
        Enter number
      </label>
      <input
        id={numberId}
        type='tel'
        className='input'
        name='number'
        value={number}
        onChange={handleChangeNumber}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
        required
      />
      <button type='submit' className='contact-button'>
        Add contact
      </button>
    </form>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (contact) => dispatch(addContact(contact)),
//   }
// }

ContactForm.propTypes = {
  banOnAddingDuplicateContact: PropTypes.func,
}

// export default connect(null, mapDispatchToProps)(ContactForm)
export default ContactForm
