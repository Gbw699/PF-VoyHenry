import React from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/userSlice/thunks";
import "./App.css";
import axios from "axios";

axios.defaults.baseURL = "";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hola</h1>
      <button onClick={() => dispatch(getUser(1))}>click</button>
    </div>
  );
}

export default App;
