import React, {useEffect, useState} from "react";
import axios from "axios";
import Note from "./Note.jsx";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("/api/notes")
        .then(res => {
          setNotes(res.data);
        })
  }, []);

  return (
    <>
        {notes.map(note => <Note note={note}/>)}
    </>
  )
}

export default App
