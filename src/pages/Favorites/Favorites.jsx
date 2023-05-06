import React, { useContext } from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Favorites() {
  //use global state
  //NOTE {} not []
  const {favorites} = useContext(FavoritesContext)

  return (
    <div>
      {
        favorites.map(item=><CharacterCard key={item.id} character={item} />)
        /* favorites.map(item=><p>{item.name}</p>) */
      }
    </div>
  )
}

export default Favorites