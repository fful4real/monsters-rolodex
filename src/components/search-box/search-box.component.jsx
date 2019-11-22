import React from 'react'
import './search-box.styles.css'
export const SearchBox = ({placeholder, handleChange})=>(
    <div className="center">
    <input type="search"
              placeholder={placeholder}
              className="search"
              onChange= {handleChange}
        />

    </div>
)