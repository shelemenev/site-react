import './App.css'
import {Main} from '../pages/Main'
import {About} from '../pages/About'
import {Gallery} from '../pages/Gallery'
import {Dog} from '../pages/Dog'
import {Me} from '../pages/Me'
import {Cat} from '../pages/Cat'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="about.html" element={<About />} />
          <Route path="gallery.html" element={<Gallery />} />
          <Route path="dog.html" element={<Dog />} />
          <Route path="me.html" element={<Me />} />
          <Route path="cat.html" element={<Cat />} />
          <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
