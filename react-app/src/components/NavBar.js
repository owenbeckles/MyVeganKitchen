import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@material-ui/core/Switch';
import { createTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../src/store/session';
import { searchBar } from '../../src/store/search'
import { green } from '@material-ui/core/colors';
import { light, dark } from '../data/theme'

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user)
  const { setTheme, light, dark, theme } = useContext(ThemeContext);
  const [navbar, setNavbar] = useState('relative flex flex-wrap items-center justify-between px-2 py-3 bg-peach');
  const [demo, setDemo] = useState('border-2 border-white px-4 text-white hover:text-peach hover:bg-white rounded');
  const [search, setSearch] = useState('font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-peach rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-black border-r-0 placeholder-peach')
  const [searchBar, setSearchBar] = useState('px-2 py-1 h-8 border border-solid  border-peach rounded-full text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-peach')
  const [keyword, setKeyword] = useState('')

  const themeChoice = theme === 'light' ? light : dark;

  const demoUser = async(e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'))
    if (data.errors) {
      return 'Login Unsuccessful'
    }
  }

    const handleChange = () => {
      if (themeChoice === light) {
        setTheme('dark');
        setNavbar('relative flex flex-wrap items-center justify-between px-2 py-3 bg-avocado')
        setDemo('border-2 border-white px-4 text-white hover:text-avocado hover:bg-white rounded')
        setSearchBar('px-2 py-1 h-8 border border-solid  border-black rounded-full text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-400')
        setSearch('font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-black rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-black border-r-0 placeholder-gray-400')
      } else {
        setTheme('light')
        setNavbar('relative flex flex-wrap items-center justify-between px-2 py-3 bg-peach')
        setDemo('border-2 border-white px-4 text-white hover:text-peach hover:bg-white rounded')
        setSearchBar('px-2 py-1 h-8 border border-solid  border-peach rounded-full text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-peach')
        setSearch('font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-peach rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-black border-r-0 placeholder-peach')
      }
    }

    // const handleClick = async(e) => {
    //   setKeyword('')
    //   await dispatch(searchBar(keyword));
    //   history.push(`/search/${keyword}`)
    // }

  
  const button = createTheme({
    palette: {
      primary: {
        main: '#388e3c'
      }
    }
  })

  return (
    <nav className={navbar}>
  <div className="sticky container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
        <NavLink to='/' exact={true}>My Vegan Kitchen</NavLink>
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none mr-auto">
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
          </a>
        </li>
        {user && <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2"><NavLink to='/recipes' exact={true}>Recipes</NavLink></span>
          </a>
        </li>}
        {user && <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2"><NavLink to='/mykitchen' exact={true}>My Kitchen</NavLink></span>
          </a>
        </li>}
      </ul>
      {user && <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
        <div className="flex">
          <span className={search}>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input type="text" className={searchBar} placeholder="Search..." />
      </div>}
      {/* <button onClick={handleClick}>Click</button> */}
      {theme === 'light' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>}
          <Switch
          color="primary"
          onChange={handleChange}
          button={button} />
    </div>
    
    <div className='user-login'>
          {!user && <NavLink className="fab fa-twitter text-lg leading-lg text-white opacity-75 pr-4 pl-1" to="/login" exact={true} activeClassName="active">
               Login
          </NavLink>}
          {!user && <button className={demo} onClick={demoUser}>
            <p>Demo</p>
          </button>}
          {user && <LogoutButton />}
    </div>
    {user && <div class='pl-4'>
    <button className={theme === 'light' ? 'border-2 border-white px-4 text-white hover:text-peach hover:bg-white rounded' : 'border-2 border-white px-4 text-white hover:text-avocado hover:bg-white rounded'}><NavLink to='/settings' exact={true}>Settings</NavLink></button>
    </div>}
  </div>    
</nav>
  );
}

export default NavBar;
