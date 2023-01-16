import './App.css'
import {Main} from '../pages/Main'
import {About} from '../pages/About'
import {Gallery} from '../pages/Gallery'
import {Dog} from '../pages/Dog'
import {Me} from '../pages/Me'
import {Cat} from '../pages/Cat'
import {Places} from '../pages/Places'
import {Kujenkino} from '../pages/Kujenkino'
import {Nosovo} from '../pages/Nosovo'
import {Tver} from '../pages/Tver'
import {Moscow} from '../pages/Moscow'
import {Music} from '../pages/Music'
import {Video} from '../pages/Video'
import {Resume} from '../pages/Resume'
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
          <Route path="places.html" element={<Places />} />
          <Route path="kujenkino.html" element={<Kujenkino />} />
          <Route path="nosovo.html" element={<Nosovo />} />
          <Route path="tver.html" element={<Tver />} />
          <Route path="moscow.html" element={<Moscow />} />
          <Route path="music.html" element={<Music />} />
          <Route path="video.html" element={<Video />} />
          <Route path="resume.html" element={<Resume />} />
          <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
