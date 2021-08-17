import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import MyKitchen from './components/MyKitchen';
import Recipes from './components/Recipes';
import Homepage from './components/Homepage'
import UserProfile from './components/UserProfile';
import IndividualRecipe from './components/IndividualRecipe';
import Blog from './components/Blog';
import Posts from './components/Posts';
import NotFound from './components/404Page';
import { useThemeContext } from './context/ThemeContext'
import "tailwindcss/tailwind.css"



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const { theme, rootEl } = useThemeContext();
  
  useEffect(() => {
    rootEl.current.parentNode.className = theme === 'light' ? 'light' : 'dark'
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
          <Homepage />
        </ProtectedRoute>
        <ProtectedRoute path="/mykitchen" exact={true}>
            <div></div>
        </ProtectedRoute>
        <ProtectedRoute path="/recipes" exact={true}>
            <Recipes />
        </ProtectedRoute>
        <ProtectedRoute path="/create" exact={true}>
            <Blog />
        </ProtectedRoute>
        <ProtectedRoute path='/blog' exact={true}>
          <Posts />
        </ProtectedRoute>
        <Route path="/recipes/:id" exact={true}>
            <IndividualRecipe />
        </Route>
        <Route path="/" exact={true}>
            <Homepage />
        </Route>
        <ProtectedRoute path='/settings'>
            <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/search/:type'>
          <UserProfile></UserProfile>
        </ProtectedRoute>
        <Route path='' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
