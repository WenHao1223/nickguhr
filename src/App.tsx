// react-router-dom
import { Route, Routes, Outlet, Link } from 'react-router-dom';

import './App.css'

// elements
import Navbar from "@/components/Navbar";

// pages
import Dashboard from '@/pages/Dashboard';
import Lend from '@/pages/Lend'
import Borrow from '@/pages/Borrow';
import Tokenize from '@/pages/Tokenize';
import PageNotFound from '@/pages/PageNotFound';

function App() {
  return (
    <>
      <div className='mb-2'>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          {/* <Route
            path="/example/two-deep"
            element={ExampleTwoDeepelement}
          /> */}
          <Route path="/lend" element={<Lend/>} />
          <Route path="/borrow" element={<Borrow/>} />
          <Route path="/tokenize" element={<Tokenize/>} />
          <Route element={<PageNotFound/>} />
        </Routes>

        <Outlet />
      </div>
    </>
  )
}

export default App
