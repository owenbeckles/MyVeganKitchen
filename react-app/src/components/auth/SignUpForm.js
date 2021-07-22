import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import { ThemeContext } from '../../context/ThemeContext';
import { light, dark } from '../../data/theme';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const { setTheme, light, dark, theme } = useContext(ThemeContext);

  const themeChoice = theme === 'light' ? light : dark;

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    // <form style={{backgroundColor: themeChoice.background}} onSubmit={onSignUp}>
    //   <div>
    //     <label style={{color: themeChoice.text }}>User Name</label>
    //     <input
    //       type="text"
    //       name="username"
    //       onChange={updateUsername}
    //       value={username}
    //     ></input>
    //   </div>
    //   <div>
    //     <label style={{color: themeChoice.text }}>Email</label>
    //     <input
    //       type="text"
    //       name="email"
    //       onChange={updateEmail}
    //       value={email}
    //     ></input>
    //   </div>
    //   <div>
    //     <label style={{color: themeChoice.text }} >Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       onChange={updatePassword}
    //       value={password}
    //     ></input>
    //   </div>
    //   <div>
    //     <label style={{color: themeChoice.text }}>Repeat Password</label>
    //     <input
    //       type="password"
    //       name="repeat_password"
    //       onChange={updateRepeatPassword}
    //       value={repeatPassword}
    //       required={true}
    //     ></input>
    //   </div>
    //   <button type="submit">Sign Up</button>
    // </form>
    <div class={theme === 'light' ? 'bg-light-bg flex justify-center p-48' : 'bg-dark-bg flex justify-center p-48'}>
    <div class="w-64 flex shadow-lg flex-col bg-cover bg-center justify-content bg-white p-6 rounded pt-8 pb-8">
  <div class="text-center text-gray-500 mb-6">
    <h2>SIGN UP
    </h2>
  </div>
  <div>
    <form onSubmit={onSignUp}>
      <input class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" 
              type="text"
              placeholder="Username"
              name="username"
              onChange={updateUsername}
              value={username}/>
      <input class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" 
              type="email"
              placeholder="Email"
              name="email"
              onChange={updateEmail}
              value={email}/>
      <input class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" 
              type="password"
              placeholder="Password"
              name="password"
              onChange={updatePassword}
              value={password}/>
      <input class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" 
              type="password"
              placeholder="Repeat Password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              required={true}
              />
      <div class="flex mt-4">
        {/* <input type="checkbox" class="mr-2" name="agreement" value="agree"></input>
        <p class="text-grey">Accept the
          <a href="#" class=" no-underline text-teal-500 hover:text-teal-400">Terms and Conditions
          </a>
        </p> */}
      </div>
      <button class={theme === 'light' ? "shadow-lg pt-3 pb-3 mt-6 w-full text-white bg-peach hover:bg-peach hover:text-white rounded-full" : "shadow-lg pt-3 pb-3 mt-6 w-full text-white bg-avocado hover:bg-avocado hover:text-white rounded-full"}
             type="submit">CREATE ACCOUNT</button>
    </form>
  </div>
  <div>
    <p class="mt-4 text-gray-500 text-sm">Have an account? 
      <a href="#"
         class={theme === 'light' ? "no-underline text-blue-400 hover:text-peach" : "no-underline text-blue-400 hover:text-avocado"}> <NavLink to='/login' exact={true}>Log in</NavLink>
      </a>
    </p>
  </div>
</div>
</div>
  );
};

export default SignUpForm;
