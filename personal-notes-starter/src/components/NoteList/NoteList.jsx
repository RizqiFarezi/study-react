import React from 'react';
import Note from '../Note/Note';
import styles from './NoteList.module.css';

function NoteList({ notes, deleteNote, toggleArchive }) {
  return (
    <div className={styles.listContainer}>
      <h3 className={styles.listTitle}>Catatan Aktif</h3>
      {notes.length === 0 ? (
        <p className={styles.emptyMessage}>Tidak ada catatan aktif.</p>
      ) : (
        notes.map(note => (
          <Note
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleArchive={toggleArchive}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
