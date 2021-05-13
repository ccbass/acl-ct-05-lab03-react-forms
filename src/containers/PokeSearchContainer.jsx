import React, { useState, useEffect } from 'react'
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
        }, 1500);

    }, [])

    function changeSearch(e) {
        setSearch(e.target.value)
    }

    return(
        <div>
            {loading && <div>L O A D I N G</div>}
            {!loading &&
                <div>
                    <input type="text" name="search" value={search} onChange={changeSearch}/>
                    {data && data.filter(obj => obj.name.includes(search)).map((p,i) => <p key={i}>{p.name}</p>)}
                </div>
            }
        </div>
    )
}