import React from 'react'
import "./CharacterDetails.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetails() {
    //I need to know the id of the character
    //get the id from the parameter in url
    const {characterId} = useParams()

    //create state to store character data
    const [character, setCharacter] = useState('')

    //https://rickandmortyapi.com/api/character/5


    //I need to the data from api when the page loads
    //so i use useEffect
    useEffect(
        ()=>{
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res=>{
                console.log(res.data)
                //store in state
                setCharacter(res.data)
            })
            .catch(err => console.log(err))

        }, [] //this means run only once when the page loads
    )

  return (
    <div className='details-container'>CharacterDetails {characterId}
    <p>{character?.name}</p>
    </div>
  )
}

export default CharacterDetails