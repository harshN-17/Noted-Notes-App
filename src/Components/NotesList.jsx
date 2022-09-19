import React from 'react';
import NotesCard from './NotesCard';
import {BsPlusCircleFill} from 'react-icons/bs';

export default function NotesList(props) {
    const reverseArray = (arr) => {
        const temp = [];
        for(let i = arr.length - 1; i>= 0; i--) {
            temp.push(arr[i]);
        }
        return temp;
    }

    const notes = reverseArray(props.notes).map((note) => {
        return (
            <NotesCard
                key={note.id}
                note={note}
                updateNote={props.updateNote}
                deleteNote={props.deleteNote}
            />
        )
    })
  return (
    <div className='notes--container'>
      {
        notes.length > 0 ? 
        notes : 
        <h1 className='empty--note--signal'>
            Tap on the
            <BsPlusCircleFill className='fake--btn'/>
            button!
        </h1>
      }
    </div>
  )
}
