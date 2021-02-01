import React from 'react'
import './filter.css'

function Filter(props) {

  return (
    <div className="header-item">
      <form>
        <label for="filter">filter by</label>
        <input 
          type="text" 
          id="filter"
          name="filter" 
          placeholder="filter by gender or payment method"
          value={props.state.value}
          onChange={props.handleChange}
        />
      </form>
    </div>
  )

}

export default Filter;