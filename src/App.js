import React from 'react'
import { Navbar, Pagination } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import CardLoading from './CardLoading'
import TextCollaps from './TextCollaps'
import ScrollBar from './ScrollBar'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">My App</Link>
        </Navbar.Brand>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/task1" className="nav-link">Card</Link>
          </li>
          <li className="nav-item">
            <Link to="/task2" className="nav-link">Разворачиваемая панель</Link>
          </li>
          <li className="nav-item">
            <Link to="/task3" className="nav-link">Scroll Bar</Link>
          </li>
          <li className="nav-item">
            <Link to="/task4" className="nav-link">Pagination</Link>
          </li>
          <li className="nav-item">
            <Link to="/task5" className="nav-link">Rating</Link>
          </li>
        </ul>
      </Navbar>
      <Routes>
      <Route path='/task1' element={<CardLoading/>}/>
        <Route path='/task2' element={<TextCollaps texts={["Текст 1", "Текст 2", "Текст 3"]}/>}/>
        <Route path='/task3' element={<ScrollBar/>}/>
        <Route path='/task4' element={<Pagination />}/>
        <Route path='/task5' element={<Rating/>}/>
      </Routes>
    </div>
  )
}

export default App

