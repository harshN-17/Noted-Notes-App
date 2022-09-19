import React from 'react'
import {BsPlusCircleFill} from 'react-icons/bs';

export default function SideBar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
    const[listOpen, setListOpen] = React.useState(false);
    
  return (
    <div className='sidebar--container'>
      <BsPlusCircleFill onClick={()=>setListOpen(!listOpen)} className={`plus--btn ${listOpen ? "rotate-btn" : ""}`}/>
      <ul className={`sidebar--list ${!listOpen ? "disable" : ""}`}>
        {colors.map((color, index) => (
            <li 
                key={index}
                className="sidebar--list--items"
                style={{backgroundColor: color}}
                onClick={()=> props.addNote(color)}
            />
        ))}
      </ul>
    </div>
  )
}