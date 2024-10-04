import React from 'react';
import Note from '../Note/Note';
import styles from './ArchiveList.module.css';

function ArchiveList({ notes, deleteNote, toggleArchive }) {
  return (
    <div className={styles.listContainer}>
      <h3 className={styles.listTitle}>Catatan Arsip</h3>
      {notes.length === 0 ? (
        <p className={styles.emptyMessage}>Tidak ada catatan arsip.</p>
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

export default ArchiveList;
