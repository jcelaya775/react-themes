import Logo from './Logo';
import Selector from './Selector';

function Navbar({ initialTheme, handleChange }) {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Logo />
          <h2 className='px-10'>React Themes</h2>
        </div>
        <Selector initialTheme={initialTheme} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Navbar;
