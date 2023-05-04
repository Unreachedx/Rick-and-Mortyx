import React,{useEffect, useState, useContext} from 'react'
import './HomePage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'


function HomePage() {


      //change to use gloabl state
  //NOTE {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)


    //create state to store chracters
    const[characters, setCharacters] = useState([])


    //https://rickandmortyapi.com/api/character

    //I need to make api call when the page loads
    useEffect(
        ()=>{
            console.log('homepage loaded')
            axios.get("https://rickandmortyapi.com/api/character")
            .then(res =>{
                console.log(res.data.results)
                //what do I do with this data?
                //store in state
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className={darkMode?"home-container home-dark":"home-container"}>
        <Search  setCharacters={setCharacters} />
        <h1>Main Characters</h1>
        <div className="characters-container">
        {
            characters.map(item=><CharacterCard key={item.id} character={item} />)
            //characters.map(item=><p key={item.id}>{item.name}</p>)
        }
        </div>
    </div>
  )
}

export default HomePage