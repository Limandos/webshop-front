import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './Home'
import { Menu } from './Menu'
import { Login } from './Login'
import { PageNotFound } from './PageNotFound'

export function App() {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}