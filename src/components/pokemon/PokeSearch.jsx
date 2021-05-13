import React from 'react'

export const PokeSearcher = ( {value, onChange} ) => {
    return <input type="text" name="search" value={value} onChange={onChange}/>
}