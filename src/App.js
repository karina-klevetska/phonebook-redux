// import { Component } from 'react'
import { useState, useEffect } from 'react'
import shortid from 'shortid'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'
import ContactItem from './components/ContactItem/ContactItem'
import './App.css'
import { useDispatch } from 'react-redux'
import { filterValue } from './redux/contacts/actions'

const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // }

  // const [contacts, setContacts] = useState([])
  // const [filter, setFilter] = useState('')

  const filterId = shortid()
  const dispatch = useDispatch()

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts })
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  // const addNewContact = (contact) => {
  //   // this.setState((prevState) => {
  //   //   return {
  //   //     contacts: [...prevState.contacts, contact],
  //   //   }
  //   // })

  //   setContacts((prev) => [...prev, contact])
  // }

  // const banOnAddingDuplicateContact = (value) => {
  //   contacts.map((contact) => contact.name).includes(value.name)
  //     ? alert(`${value.name} is already in contacts`)
  //     : addNewContact(value)
  // }

  const handleChangeFilter = (e) => {
    // this.setState({
    //   filter: e.target.value,
    // })
    // setFilter(e.target.value)
    dispatch(filterValue(e.target.value))
  }

  // const deleteContact = (id) => {
  //   // this.setState((prevState) => ({
  //   //   contacts: prevState.contacts.filter((contact) => contact.id !== id),
  //   // }))

  //   setContacts((prev) => prev.filter((contact) => contact.id !== id))
  // }

  return (
    <div className='App'>
      <h1>Phonebook</h1>

      <ContactForm></ContactForm>

      <h2>Contacts</h2>

      <Filter
        filterId={filterId}
        handleChangeFilter={handleChangeFilter}
      ></Filter>

      <ContactList>
        <ContactItem></ContactItem>
      </ContactList>
    </div>
  )
}

export default App
