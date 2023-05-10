import { ChangeEvent, useContext, useMemo, useEffect } from 'react';
import { useParams } from 'react-router';
import './Workspace.scss';

import { NotesContext } from '../../contexts/NotesContext';
import { Note } from '../../types/Note';
import { getDateFormat } from '../../helpers/getDateFormat';

const Workspace = () => {
  const { notes, changeNote, isEditNote, setIsEditNote } = useContext(NotesContext);
  const { id } = useParams();
  const foundNote = useMemo(() => {
    return notes.find(note => note.id === id);
  }, [id, notes]);

  useEffect(() => {
    if (isEditNote) {
      setIsEditNote(false);
    }
  }, [id]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const note = {
      ...foundNote,
      time: getDateFormat(new Date()),
      title: e.target.value,
    };

    changeNote(note as Note);
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const note = {
      ...foundNote,
      time: getDateFormat(new Date()),
      text: e.target.value,
    };

    changeNote(note as Note);
  };

  return (
    <section className="workspace">
      {!foundNote
        ? <p>Not found</p>
        : (
          <>
            <time className="workspace__time">
              {foundNote.time}
            </time>
            <input
              className="workspace__title"
              placeholder="Title"
              value={foundNote.title}
              onChange={onChangeTitle}
              disabled={!isEditNote}
            />
            <textarea
              className="workspace__text"
              placeholder="Text"
              value={foundNote.text}
              onChange={onChangeText}
              disabled={!isEditNote}
            />
          </>
        )}
    </section>
  );
};

export default Workspace;
