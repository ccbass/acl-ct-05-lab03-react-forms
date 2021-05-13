import React from 'react'

export const Pokemon = ( {pokemon} ) => {
    return (
        <div>
            {pokemon.name} - <a href={pokemon.url}>details - json</a>
        </div>
    )
}