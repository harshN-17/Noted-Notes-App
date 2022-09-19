import React from 'react';
import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import NotesList from './Components/NotesList.jsx';
import SideBar from './Components/SideBar.jsx'

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("noted-data")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: nanoid(),
      text: "Type Something...",
      time: Date.now(),
      color,
    })
    setNotes(tempNotes);
  }

  const updateNote = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    // if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  }

  const deleteNote = (id) => {
    const tempNotes = notes.filter((note)=>note.id!==id);
    setNotes(tempNotes);
  }

  useEffect(()=>{
    localStorage.setItem("noted-data", JSON.stringify(notes));
  },[notes]);

  return (
    <>
    <div className="logo">NOTED.</div>
    <div className="App">
      <SideBar addNote={addNote}/>
      <NotesList notes={notes} updateNote={updateNote} deleteNote={deleteNote}/>
    </div>
    </>
  );
}

export default App;
