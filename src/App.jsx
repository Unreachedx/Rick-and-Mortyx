import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/Homepage'
import Episodes from './pages/Episodes/Episodes';
import About from './pages/About/About';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'





function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/details/:characterId' element={<CharacterDetails />} />
      </Routes>

      
      <Footer />
    </BrowserRouter>
  )
}

export default App
