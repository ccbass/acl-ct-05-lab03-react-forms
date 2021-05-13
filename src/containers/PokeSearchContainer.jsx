import React, { useState, useEffect } from 'react'
import { PokeSearcher } from '../components/pokemon/PokeSearch'
import { PokeList } from '../components/pokemon/PokeList'
import { getAllPokemon } from '../services/PokeApi'

export const PokeContainer = () => {
    const [ data , setData ] = useState(null)
    const [ search, setSearch ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect( async () => {
        const allPokeData = await getAllPokemon()
        setData(allPokeData)
        
        const interval = setTimeout(() => {
            setLoading(false)
        }, 100);

    }, [])

    function changeSearch(e) {
        setSearch(e.target.value)
    }

    return(
        <div>
            {loading && <div>L O A D I N G</div>}
            {!loading &&
                <div>
                    <PokeSearcher value={search} onChange={changeSearch}/>

                    {data && <PokeList searchStr={search} pokeArr={data} />}
                </div>
            }
        </div>
    )
}