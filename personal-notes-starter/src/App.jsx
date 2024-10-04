import React, { useState, useEffect } from 'react';
import styles from './styles/App.module.css';
import { getInitialData } from './utils/index.js';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import NoteList from './components/NoteList/NoteList';
import SearchBar from './components/SearchBar/SearchBar';
import ArchiveList from './components/ArchiveList/ArchiveList';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const initialData = getInitialData();
    setNotes(initialData);
  }, []);

  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchive = (id) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const activeNotes = notes.filter(note =>
    !note.archived &&
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const archivedNotes = notes.filter(note =>
    note.archived &&
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Aplikasi Catatan Pribadi</h1>
      <AddNoteForm addNote={addNote} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className={styles.listsContainer}>
        <NoteList notes={activeNotes} deleteNote={deleteNote} toggleArchive={toggleArchive} />
        <ArchiveList notes={archivedNotes} deleteNote={deleteNote} toggleArchive={toggleArchive} />
      </div>
      {notes.length === 0 && (
        <p className={styles.emptyMessage}>Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default App;
