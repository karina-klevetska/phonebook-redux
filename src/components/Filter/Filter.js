import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import './Filter.css'
import { getFilter } from '../../redux/contacts/selectors'
import { filterValue } from '../../redux/contacts/actions'

const Filter = () => {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()
  return (
    <div className='filter-container'>
      <label className='label' htmlFor='filter'>
        Find contacts by name
      </label>
      <input
        className='input'
        id='filter'
        type='text'
        name='filter'
        value={value}
        onChange={(e) => dispatch(filterValue(e.target.value))}
      />
    </div>
  )
}

Filter.propTypes = {
  filterId: PropTypes.string,
  handleChangeFilter: PropTypes.func,
}

export default Filter
