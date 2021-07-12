import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUserSettings } from '../../store/session';
import { ThemeContext } from '../../context/ThemeContext';
import { useHistory } from 'react-router-dom'

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const user = useSelector((state) => state.session.user)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.emal)
    const [firstname, setFirstname] = useState(user.firstname)
    const [lastname, setLastname] = useState(user.lastname)

    const { setTheme, light, dark, theme, rootEl } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;

    const handleClick = async (e) => {
        e.preventDefault();
        const data = await dispatch(editUserSettings(username, email))
          window.confirm("You are making changes to your account. Click OK to confirm.")
          history.push('/')
    }
  
    // useEffect(() => {
    //   rootEl.current.parentNode.className = theme == 'light' ? 'light' : 'dark'
    // }, [theme])

    useEffect(()=>{
    },[user])

    return (
        <div class={theme === 'light' ? 'flex justify-center pt-64 bg-light-bg' : 'flex justify-center pt-64 bg-dark-bg'}>
  <div class="sm:w-3/5 w-full bg-white">
    <div class="p-8">
    <form onSubmit={handleClick}>
        <div>
            {errors.map((error) => (
                     <div>{error}</div>
                ))}
        </div>
      <label for="username" class="text-xs text-gray-500">Edit Username</label>
      <em>
      <input 
      id="username" 
      class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1" 
      type="text"
        placeholder={user.username}
        name='username'
        onChange={(e) => setUsername(e.target.value)}
        />
        </em>
      <label id="passowrd" class="text-xs text-gray-500">Edit Email</label>
      <input 
      id="email"
       class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-grey-700 pb-1"
         type="text"
         placeholder={user.email}
         name='email'
         onChange={(e) => setEmail(e.target.value)}
         />
      <button class={theme === 'light' ? "shadow-lg pt-3 pb-3 w-full text-white bg-peach hover:bg-white hover:text-peach rounded-full cursor-pointer" : "shadow-lg pt-3 pb-3 w-full text-white bg-avocado hover:bg-white hover:text-avocado rounded-full cursor-pointer"}
         type="submit" >Confirm Changes</button>
    </form>
    </div>
  </div>
  </div>
    )
}


export default UserProfile;