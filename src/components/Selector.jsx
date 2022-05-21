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

function Selector({ initialTheme, handleChange }) {
  const defaultTheme = Object.keys(options).find(
    (key) => options[key] === initialTheme
  )

  return (
    <Dropdown
      options={Object.keys(options)}
      value={defaultTheme}
      onChange={(event) => {
        const value = options[event.value]
        handleChange(value)
      }}
      placeholder='Select a Theme'
    />
  )
}

export default Selector
