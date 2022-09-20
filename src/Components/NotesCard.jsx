import React from 'react'
import {MdDelete} from 'react-icons/md';

export default function NotesCard(props) {
    // console.log(props);
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
        let date = new Date(time);
        let day = date.getDate();
        day = day < 10 ? "0"+day : day;
        let month = monthNames[date.getMonth()];
        month = month < 10 ? "0" + month: month;
        let hrs = date.getHours();
        hrs = hrs < 10 ? "0" + hrs: hrs;
        let min = date.getMinutes();
        min = min < 10 ? "0" + min: min;
        return `${hrs}:${min}, ${day} ${month}`;
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
