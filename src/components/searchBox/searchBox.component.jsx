import React from 'react'
import './searchBox.styles.css'

function SearchBox({placeHolder,callback}) {
    return (
        <div className='searchContainer'>
            <input type="search" placeholder={placeHolder} onChange={callback} className='search'/>
        </div>
    )
}

export default SearchBox
