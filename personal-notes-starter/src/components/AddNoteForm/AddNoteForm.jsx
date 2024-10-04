import React, { useState } from 'react';
import styles from './AddNoteForm.module.css';

function AddNoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleCharsLeft, setTitleCharsLeft] = useState(50);

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 50) {
      setTitle(input);
      setTitleCharsLeft(50 - input.length);
    }
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      alert('Judul dan isi catatan tidak boleh kosong.');
      return;
    }
    addNote(title, body);
    setTitle('');
    setBody('');
    setTitleCharsLeft(50);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Tambah Catatan</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="title" className={styles.label}>Judul</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className={styles.input}
          placeholder="Masukkan judul catatan"
        />
        <p className={styles.charCount}>{titleCharsLeft} karakter tersisa</p>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="body" className={styles.label}>Isi</label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          className={styles.textarea}
          placeholder="Masukkan isi catatan"
        ></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>Tambah</button>
    </form>
  );
}

export default AddNoteForm;
