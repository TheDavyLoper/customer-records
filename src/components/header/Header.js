import React from 'react'
import Filter from '../filter/Filter'
import Search from '../search/Search'
import './header.css'

function Header(props) {
  return(
    <div className="header">
      <h1>Customer Records</h1>
      <Filter handleChange={props.handleChange} state={props.state}/>
      <Search handleChange={props.handleChange} state={props.state} handleSearch={props.handleSearch}/>
      
    </div>
  )
}

export default Header;