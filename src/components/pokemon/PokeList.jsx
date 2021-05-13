import React from 'react'
import { Pokemon } from './Pokemon'
import PropTypes from 'prop-types';

const PokeList = ( {searchStr, pokeArr} ) => {
    return (
        <div>
            {pokeArr
                .filter(poke => poke.name.includes(searchStr))
                .map( (poke, index) => {
                    return  <div key={`${poke}-${index}`}>
                                <Pokemon pokemon={poke} /> 
                            </div> 
                })
            }
        </div>
    )
}

PokeList.propTypes = {
    searchStr: PropTypes.string.isRequired,
    pokeArr: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export { PokeList }