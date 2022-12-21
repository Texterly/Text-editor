import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NodeList from './components/NodeList';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'This is my first note!',
    date: '15/10/2022',
  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    date: '25/10/2022',
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    date: '26/10/2022',
  }]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NodeList
        notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
