import React from 'react';
import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import NotesList from './Components/NotesList.jsx';
import SideBar from './Components/SideBar.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("noted-data")) || []
  );  

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: nanoid(),
      text: "",
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

  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    // console.log(text);
    setSearchText(text);
  }
  useEffect(()=>{
    localStorage.setItem("noted-data", JSON.stringify(notes));
  },[notes]);

  return (
    <>
    <Navbar text={searchText} handleSearch={handleSearch}/>
    <div className="App">
      <SideBar addNote={addNote}/>
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </div>
    </>
  );
}

export default App;
