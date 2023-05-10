import { useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { v4 as v4Id } from 'uuid';
import './Layout.scss';

import { Note } from '../../types/Note';
import { NotesContext } from '../../contexts/NotesContext';
import { getDateFormat } from '../../helpers/getDateFormat';
import { useLocaleStorage } from '../../hooks/useLocaleStorage';

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [notes, setNotes] = useLocaleStorage<Note[]>([], 'store');
  const [isEditNote, setIsEditNote] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const addNote = () => {
    const initialNote = {
      id: v4Id(),
      title: 'Some Title',
      time: getDateFormat(new Date()),
      text: 'Some text'
    };

    setNotes((currNotes: Note[]) => ([...currNotes, initialNote]));
    navigate(`main/${initialNote.id}`);
  };

  const deleteNote = () => {
    if (window.confirm('Delete this note?')) {
      setNotes((currNotes: Note[]) => currNotes.filter(note => note.id !== id));
      navigate('/');
    }
  };

  const changeNote = (changedNote: Note) => {
    setNotes((currNotes: Note[]) => currNotes.map(note => {
      if (note.id === changedNote.id) {
        return changedNote;
      }

      return note;
    }));
  };

  return (
    <NotesContext.Provider value={{
      notes,
      addNote,
      deleteNote,
      isEditNote,
      setIsEditNote,
      changeNote,
    }}>
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </NotesContext.Provider>
  );
}

export default Layout;
