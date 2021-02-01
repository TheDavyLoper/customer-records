import React from 'react'
import './search.css'

function Search(props) {
  //console.log(props)
  
    return (
      <div>
        <form>
          <label for="search">Search</label>
          <input 
            type="text" 
            id="search"
            name="search" 
            placeholder="search"
            value={props.state.value}
            onChange={props.handleChange}
          />
        {/* <button onClick={props.handleSearch}>Search</button> */}
        </form>
      </div>
    )
}

export default Search;