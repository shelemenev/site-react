import './App.css'
import {Main} from '../pages/Main'
import {About} from '../pages/About'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="about.html" element={<About />} />
          <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
