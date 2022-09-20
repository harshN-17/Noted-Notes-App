import React from 'react'
import {ImSearch} from 'react-icons/im';

export default function Navbar(props) {
  return (
    <div className="navbar">
        <span className='logo'>Noted.</span>
        <div className='search'>
            <input 
                type="text" 
                className={`search--bar ${props.text ? "search--solid--width" : ""}`}
                defaultValue={props.text}
                onChange={(event)=>props.handleSearch(event.target.value)}
                />
            <ImSearch className='search--icon'/>
        </div>
    </div>
  )
}
