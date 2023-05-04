import {useState, createContext, useEffect} from 'react'

//create this context
export const ThemeContext = createContext()

//create provider
export default function ThemeContextProvider(props){
    //create global state
    const [darkMode, setDarkMode] = useState(false)

    useEffect(
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
    )

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}