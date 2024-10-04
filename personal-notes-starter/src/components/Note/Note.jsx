import React from 'react';
import styles from './Note.module.css';

function Note({ note, deleteNote, toggleArchive }) {
  const { id, title, body, archived, createdAt } = note;

  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div className={styles.noteContainer}>
      <h4 className={styles.noteTitle}>{title}</h4>
      <p className={styles.noteBody}>{body}</p>
      <p className={styles.noteDate}>{formattedDate}</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => toggleArchive(id)} className={styles.archiveButton}>
          {archived ? 'Unarchive' : 'Archive'}
        </button>
        <button onClick={() => deleteNote(id)} className={styles.deleteButton}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default Note;
