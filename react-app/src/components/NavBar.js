import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@material-ui/core/Switch';
import { createTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { login } from '../../src/store/session';
import { green } from '@material-ui/core/colors';
import { light, dark } from '../data/theme'

const NavBar = () => {
  const dispatch = useDispatch();
  const { setTheme, light, dark, theme } = useContext(ThemeContext);
  const [navbar, setNavbar] = useState('relative flex flex-wrap items-center justify-between px-2 py-3 bg-peach');
  const [demo, setDemo] = useState('border-2 border-white px-4 text-white hover:text-peach hover:bg-white rounded');
  const [search, setSearch] = useState('font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-peach rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-black border-r-0 placeholder-peach')
  const [searchBar, setSearchBar] = useState('px-2 py-1 h-8 border border-solid  border-peach rounded-full text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-peach')

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

  
  const button = createTheme({
    palette: {
      primary: {
        main: '#388e3c'
      }
    }
  })

  return (
    // <nav style={{backgroundColor: themeChoice.background}}>
    //   <div>
    //     <div className='navbar-container'>
    //       <NavLink to='/' exact={true} style={{color: themeChoice.title}} className='mvk-title'>
    //         My Vegan Kitchen
    //       </NavLink>
    //     </div>
    //     <div>
    //       <NavLink to='/recipes' exact={true} style={{color: themeChoice.title}}>
    //         Recipes
    //       </NavLink>
    //     </div>
    //     <div>
    //       <NavLink to='/blog' exact={true} style={{color: themeChoice.title}}>
    //         Blog
    //       </NavLink>
    //     </div>
    //     <div>
    //       <NavLink to='/plans' exact={true} style={{color: themeChoice.title}}>
    //         Meal Plans
    //       </NavLink>
    //     </div>
    //     <div class="bg-white shadow p-4 flex"><span class="w-auto flex justify-end items-center text-gray-500 p-2">
    //         <i class="material-icons text-3xl">search</i>
    //     </span>
    //     <input class="w-full rounded p-2" type="text"></input>
    //     <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
    //             <p class="font-semibold text-xs">Search</p>
    //     </button>
    //     </div>
    //     <ul>
    //       <li>
    //         <NavLink to="/" exact={true} activeClassName="active">
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/login" exact={true} activeClassName="active">
    //           Login
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/sign-up" exact={true} activeClassName="active">
    //           Sign Up
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/users" exact={true} activeClassName="active">
    //           Users
    //         </NavLink>
    //       </li>
    //       <li>
    //         <LogoutButton />
    //       </li>
    //     </ul>
    //     <i class="fas fa-house-user"></i>
    //     <Switch
    //       color="primary"
    //       onChange={(() => theme === 'light' ? setTheme('dark') : setTheme('light'))}
    //       button={button} />
    //     </div>
    // </nav>
    <nav className={navbar}>
  <div className="sticky container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
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
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2"><NavLink to='/recipes' exact={true}>Recipes</NavLink></span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2"><NavLink to='/blog' exact={true}>Blog</NavLink></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2"><NavLink to='/plans' exact={true}>Meal Plans</NavLink></span>
          </a>
        </li> */}
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
            <span className="ml-2"><NavLink to='/mykitchen' exact={true}>My Kitchen</NavLink></span>
          </a>
        </li>
      </ul>
      <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
        <div className="flex">
          <span className={search}>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input type="text" className={searchBar} placeholder="Search..." />
      </div>
      <i class="fas fa-sun"></i>
          <Switch
          color="primary"
          // onChange={(() => theme === 'light' ? setTheme('dark') : setTheme('light'))}
          onChange={handleChange}
          button={button} />
    </div>
    <div className='user-login'>
          <NavLink className="fab fa-twitter text-lg leading-lg text-white opacity-75 pr-4 pl-1" to="/login" exact={true} activeClassName="active">
               Login
          </NavLink>
          <NavLink className="fab fa-twitter text-lg leading-lg text-white opacity-75" to="/sign-up" exact={true} activeClassName="active">
               Sign Up
          </NavLink>
          <button className={demo} onClick={demoUser}>
            <p>Demo</p>
          </button>
          <LogoutButton />
    </div>
  </div>
</nav>
  );
}

export default NavBar;
