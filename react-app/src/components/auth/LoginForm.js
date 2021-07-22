import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const { setTheme, light, dark, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const themeChoice = theme === 'light' ? light : dark;

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div class={theme === 'light' ? "flex flex-col-reverse sm:flex-row bg-light-bg p-64" : "shadow-lg flex flex-col-reverse sm:flex-row bg-dark-bg p-64"}>
      <div class="w-full bg-white p-4">
        <div class="text-gray-700">
          <h2>Login</h2>
          <p class="mt-2 text-xs text-gray-base"><em>Please enter your email and password.</em></p>
        </div>
  
        <form onSubmit={onLogin}>
           <div>
            {errors.map((error) => (
           <div>{error}</div>
         ))}
       </div>
          <div class="mt-3">
          <span class="flex bg-gray-300 items-center px-3">
            <i class="material-icons text-gray-400">email</i>
            <input 
            class="bg-gray-300 p-2 w-full" 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={updateEmail}>
            </input>
          </span>
  
            <span class="flex bg-gray-300 items-center mt-2 px-3">
            <i class="material-icons text-gray-400">lock</i>
            <input 
              class="bg-gray-300 p-2 w-full"
              type="password" 
              placeholder="Password"
              value={password}
              onChange={updatePassword}>
              </input>
          </span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <button class={theme === 'light' ? "bg-peach hover:bg-white px-4 py-2 text-white hover:text-peach" : "bg-avocado hover:bg-white px-4 py-2 text-white hover:text-avocado"} type="submit">Login</button>
            <a class="text-xs underline-none text-black">Don't have an account? <a class={theme === 'light' ? 'text-blue-400 hover:text-peach' : 'text-blue-400 hover:text-avocado'}><NavLink to='/sign-up' exact={true}>Sign Up</NavLink></a> </a>
          </div>
        </form>
  
      </div>
</div>
  );
};

export default LoginForm;
