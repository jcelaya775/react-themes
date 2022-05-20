import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
  'Light',
  'All-White',
  'Dark',
  'Forest',
  'Modern',
  'Android',
  'Goldsky',
  'Pastel',
  'Tuxedo',
  'Gold Blue',
  'Polaroid',
  'Hacker',
]
const defaultOption = window.localStorage.getItem('theme') || 'light'

function Selector({ handleChange }) {
  return (
    <div className='selector'>
      <Dropdown
        options={options}
        value={defaultOption}
        onChange={(event) => {
          handleChange(event)
        }}
        placeholder='Select a Theme'
      />
    </div>
  )
}

export default Selector
