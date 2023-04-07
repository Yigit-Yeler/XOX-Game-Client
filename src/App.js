import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from './screens/LogIn';
import Register from './screens/Register';
import Home from './screens/Home';
import InGame from './screens/InGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<InGame />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
