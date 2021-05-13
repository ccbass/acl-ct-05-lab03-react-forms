import React from 'react'
import PropTypes from 'prop-types';


export const Pokemon = ( {pokemon} ) => {
    return (
        <p>
            {pokemon.name} - <a href={pokemon.url}>details - json</a>
        </p>
    )
}

Pokemon.propTypes = {
    pokeArr: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }
    ).isRequired,
};