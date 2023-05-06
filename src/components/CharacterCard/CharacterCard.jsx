import React, {useContext, useState, useEffect} from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from '../../contexts/FavoritesContext';

function CharacterCard({character}) {

  //use global state
  //NOTE {} not []
  const {favorites, addCharacter, removeCharacter } = useContext(FavoritesContext)
  //create a varible to test UI
  //const isFavorite = false;
  //create state
  const [isFavorite, setIsFavorites] = useState(false)

  useEffect(
    ()=>{
      //is this card in favorites?
      setIsFavorites(favorites.find(item=>item.id === character.id))
      //find returns the element if found, that is considered "true"
      //returns undefined if not, that is considered "false"



    }, [favorites] 
     )

  return (
    <div className='character-card'>
        <img src={character.image} />
        <p>{character.name}</p>
        <div className='button-container'>
        <Link to={`/details/${character.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart onClick={()=>removeCharacter(character.id)} className='heart-icon' />
          :
          <FaRegHeart onClick={()=>addCharacter(character)} className='heard-icon' />
        }
        </div>
    </div>
  )
}

export default CharacterCard