import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

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
    // <form onSubmit={onLogin}>
    //   <div>
    //     {errors.map((error) => (
    //       <div>{error}</div>
    //     ))}
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <input
    //       name="email"
    //       type="text"
    //       placeholder="Email"
    //       value={email}
    //       onChange={updateEmail}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       name="password"
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={updatePassword}
    //     />
    //     <button type="submit">Login</button>
    //   </div>
    // </form>
    <div class="shadow-lg flex flex-col-reverse sm:flex-row">
      <div class="w-full bg-white p-4">
        <div class="text-gray-700">
          <h2>Login</h2>
          <p class="mt-2 text-xs text-gray-base">Lorem ipsum dolor sit amet</p>
        </div>
  
        <form>
          <div class="mt-3">
          <span class="flex bg-gray-300 items-center px-3">
            <i class="material-icons text-gray-400">person</i>
            <input class="bg-gray-300 p-2 w-full" type="text" placeholder="username"></input>
          </span>
  
            <span class="flex bg-gray-300 items-center mt-2 px-3">
            <i class="material-icons text-gray-400">lock</i>
            <input class="bg-gray-300 p-2 w-full" type="text" placeholder="Password"></input>
          </span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <button class="bg-blue-500 hover:bg-blue-400 px-4 py-2 text-white">Login</button>
            <a href="#" class="text-xs underline-none text-blue-400 hover:text-blue-600">Forgot password?</a>
          </div>
        </form>
  
      </div>
      <div class="w-full bg-blue-500 p-4 text-white text-center flex flex-col justify-center ">
  
        <h4>Sign up Now</h4>
        <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
          eget </p>
        <button class="bg-blue-700 mx-auto hover:bg-blue-600 mt-4 text-white text-sm px-4 py-2 w-3/5">
          Register
        </button>
  
      </div>
</div>
  );
};

export default LoginForm;
