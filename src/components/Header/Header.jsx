import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'


function Header() {
  //change to use gloabl state
  //NOTE {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  //crate a variable for darkmode
  //const darkMode = false;

  //ceate state from theme
  //const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode?"header-container header-dark":"header-container"}>
        <div>
            <Link to='/' style={{marginRight:"10px"}}>Home</Link>
            <Link to='/about' style={{marginRight:"10px"}}>About</Link>
            <Link to='/episodes'>Episodes</Link>
          </div>
          <button onClick = {()=>setDarkMode(!darkMode)} className={darkMode?"theme-button theme-button-dark":"theme-button"}>
            {
              darkMode?"Light Mode":"Dark Mode"
            }
            </button>
        </div>
  )
}


export default Header