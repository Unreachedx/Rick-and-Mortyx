import {useState, createContext, useEffect} from 'react'

//create this context
export const FavoritesContext = createContext()

//create provider
export default function FavoritesContextProvider(props){
    //create global state
    const [favorites, setFavorites] = useState([])

    useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedFavs = localStorage.getItem('favoritsList')
            //console.log(typeof(storedDarkMode))
            if (storedFavs) {
                //use this to initalize State
                setFavorites(JSON.parse(storedFavs))
            }
            //otherwise use its default

        }, [] //runs once when context loads
    )

        const addCharacter = (charToAdd) =>{
            console.log('add' , charToAdd)
            let newFavorites = [...favorites, charToAdd]
            //console.log(newFavorites)
            //update state
            setFavorites(newFavorites)
            //update local storage
             localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
        }

        const removeCharacter = (charId) =>{
            console.log('remove', charId)
            //use filter to keep all values that don't match this id
            let newFavorites = favorites.filter(item=>item.id !== charId)
            //update state
            setFavorites(newFavorites)
            //update local storage
            localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
        }

    return (
        <FavoritesContext.Provider value={{ favorites, addCharacter, removeCharacter }} >
            {props.children}
        </FavoritesContext.Provider>
    )
}