import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className='navbar'>
      <Link to='/' className='navlink'>Home</Link>
      <Link to='/character_sheet' className='navlink'>Character Sheet</Link>
      <Link to='/blog' className='navlink'>Blog</Link>
    </div>
  )
}

export default NavBar;