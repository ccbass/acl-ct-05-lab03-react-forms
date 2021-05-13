import React from 'react'
import { Pokemon } from './Pokemon'

export const PokeList = ( {searchStr, pokeArr} ) => {
    return (
        <div>
            {pokeArr
                .filter(poke => poke.name.includes(searchStr))
                .map( (poke, index) => {
                    return  <p key={`${poke}-${index}`}>
                                <Pokemon pokemon={poke} /> 
                            </p> 
                })
            }
        </div>
    )
}