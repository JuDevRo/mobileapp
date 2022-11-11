import React, {useState, useEffect} from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import View from '../containers/View'
import Layout from '../components/Layout';

import '../styles/App.css'

function App() {
  const [hash, setHash] = useState("")
    
  useEffect(() => {
      if(window.location.pathname != "/") {
          setHash("diferent")
      } if (window.location.pathname === "/") {
          setHash("/")
      }
      
  }, [window.location.pathname])
  return (
    <BrowserRouter>
      <Layout ruta={hash}>
          <Routes>
            <Route path="/" element={<Home ruta={hash}/>} />
            <Route path="/view/:id" element={<View ruta={hash} />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
