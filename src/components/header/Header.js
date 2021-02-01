import React from 'react'
import Filter from '../filter/Filter'
import Search from '../search/Search'
import './header.css'

function Header(props) {
  return(
    <div className="header">
      <h3>Customer Records</h3>
      <Filter handleChange={props.handleChange} state={props.state}/>
      <Search handleChange={props.handleChange} state={props.state} handleSearch={props.handleSearch}/>
      
    </div>
  )
}

export default Header;