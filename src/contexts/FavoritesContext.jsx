import {useState, createContext, useEffect} from 'react'

//create this context
export const FavoritesContext = createContext()

//create provider
export default function FavoritesContextProvider(props){
    //create global state
    const [favorites, setFavorites] = useState([])

    /* useEffect(
        ()=>{
            console.log('context loaded')
            //get value from local storage
            const storedDarkMode = localStorage.getItem('darkMode')
            //console.log(typeof(storedDarkMode))
            if (storedDarkMode) {
                //use this to initalize State
                setDarkMode(JSON.parse(storedDarkMode))
            }
        }, [] //runs once when context loads
    )

    useEffect(
        ()=>{
            console.log('darkMode now ', darkMode)
            //save value anytime it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode] //runs anytime darkMode changes
    ) */

        const addCharacter = (charToAdd) =>{
            console.log('add' , charToAdd)
            let newFavorites = [...favorites, charToAdd]
            //console.log(newFavorites)
            //update state
            setFavorites(newFavorites)

        }

        const removeCharacter = (charId) =>{
            console.log('remove', charId)
            //use filter to keep all values that don't match this id
            let newFavorites = favorites.filter(item=>item.id !== charId)
            //update state
            setFavorites(newFavorites)
        }

    return (
        <FavoritesContext.Provider value={{ favorites, addCharacter, removeCharacter }} >
            {props.children}
        </FavoritesContext.Provider>
    )
}