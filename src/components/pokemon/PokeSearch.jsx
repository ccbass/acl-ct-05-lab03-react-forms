import React from 'react'

export const PokeSearcher = ( {value, onChange} ) => {
    return (
        <form>
            <label htmlFor="poke-search">Character Name</label>
            <input type="text" id='poke-search' placeholder='search here' value={value} onChange={onChange}/>
        </form>
        
    )
}