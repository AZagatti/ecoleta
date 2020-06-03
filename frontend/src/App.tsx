import React from "react";
import { ToastContainer } from 'react-toastify';

import Routes from "./routes";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
