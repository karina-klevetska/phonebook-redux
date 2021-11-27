// import PropTypes from 'prop-types'
import './ContactItem.css'
// import { connect } from 'react-redux'
import { deleteContact } from '../../redux/contacts/actions'
import { getFilteredContacts } from '../../redux/contacts/selectors'
import { useSelector, useDispatch } from 'react-redux'

const ContactItem = () => {
  const contacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch()

  // const onDelete = (id) => dispatch(deleteContact(id))
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type='button'
            className='delete-button'
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  )
}

// ContactItem.propTypes = {
//   filter: PropTypes.string,
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
// }

// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (id) => dispatch(deleteContact(id)),
//   }
// }

export default ContactItem
// export default connect(mapStateToProps, mapDispatchToProps)(ContactItem)
