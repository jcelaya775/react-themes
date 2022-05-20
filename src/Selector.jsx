import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = {
  Light: 'light',
  Dark: 'dark',
  'Gold Blue': 'goldblue',
  Olive: 'olive',
  'Purple-ish': 'purple-ish',
  Peach: 'peach',
  Forest: 'forest',
  Tuxedo: 'tuxedo',
  Polaroid: 'polaroid',
  Hacker: 'hacker',
  'All-White': 'all-white',
  Android: 'android',
  Pastel: 'pastel',
  Goldsky: 'goldsky',
}

const defaultOption = (() => {
  let value = window.localStorage.getItem('theme')

  if (value) {
    value = Object.keys(options).find((key) => options[key] == value)
    return value
  } else return 'Light'
})()

function Selector({ handleChange }) {
  return (
    <div className='selector'>
      <Dropdown
        options={Object.keys(options)}
        value={defaultOption}
        onChange={(event) => {
          const value = options[event.value]
          handleChange(value)
        }}
        placeholder='Select a Theme'
      />
    </div>
  )
}

export default Selector
