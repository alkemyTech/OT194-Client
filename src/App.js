import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// TODO page components and delete this
const Home = () => <h1>Home</h1>
const News = () => <h1>News</h1>
const NotFound = () => <h1>NotFound</h1>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App