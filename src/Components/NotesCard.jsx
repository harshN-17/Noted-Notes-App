import React from 'react'
import {MdDelete} from 'react-icons/md';

export default function NotesCard(props) {
    console.log(props);
    const trimTime = (time) => {
        const monthNames = [
            "_",
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
        const date = new Date(time);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const hrs = date.getHours();
        const min = date.getMinutes();
        return `${hrs}:${min}, ${day}th ${month}`;
    }
  return (
    <div className='notes--card' style={{backgroundColor: props.note.color}}>
      <textarea 
        name="noteText" 
        className="card--text--area" 
        defaultValue={props.note.text}
        onChange={(event)=>props.updateNote(event.target.value, props.note.id)}
      />
      <div className="card--footer">
        <span className="card--time">{trimTime(props.note.time)}</span>
        <MdDelete className='delete--icon' onClick={()=>props.deleteNote(props.note.id)}/>
      </div>
    </div>
  )
}
