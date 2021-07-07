import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import MyKitchen from './components/MyKitchen';
import Recipes from './components/Recipes';
import Plans from './components/Plans';
import Blog from './components/Blog';
import Homepage from './components/Homepage'
import { useThemeContext } from './context/ThemeContext'



function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const { theme, rootEl } = useThemeContext();
  
  useEffect(() => {
    rootEl.current.parentNode.className = theme == 'light' ? 'light' : 'dark'
  }, [theme])

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path="/mykitchen" exact={true}>
            <MyKitchen />
        </ProtectedRoute>
        <Route path="/recipes" exact={true}>
            <Recipes />
        </Route>
        <Route path="/plans" exact={true}>
            <Plans />
        </Route>
        <Route path="/blog" exact={true}>
            <Blog />
        </Route>
        <Route path="/" exact={true}>
            <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
