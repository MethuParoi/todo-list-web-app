import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {useState} from 'react';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Protected from "./components/Protected";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Protected component={Home} />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
