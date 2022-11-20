import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

function Home() {
    return (
        <div>
            <SearchForm></SearchForm>
            <CocktailList/>
        </div>
    )
}

export default Home
