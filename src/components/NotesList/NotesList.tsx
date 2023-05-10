import { useContext, useMemo } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { useSearchParams, NavLink } from 'react-router-dom';
import cn from 'classnames';
import './NotesList.scss';
import { NotesContext } from '../../contexts/NotesContext';
import { getTimeFormat } from '../../helpers/getTimeFormat';
import Empty from '../Empty/Empty';

const linkClasses = ({ isActive }: { isActive: boolean }) => cn(
  'note__btn',
  { active: isActive },
);

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const visibleNotes = useMemo(() => {
    if (!query) {
      return notes;
    }

    const reg = new RegExp(`${query}.+$`, 'i');
    return notes.filter(note => {
      return note.text.search(reg) !== -1 || note.title.search(reg) !== -1;
    });
  }, [query, notes]);

  if (!visibleNotes.length) {
    return <Empty />;
  }

  return (
      <ul className="notes">
        <TransitionGroup>
          {visibleNotes.map(note => (
            <CSSTransition key={note.id} timeout={500} classNames="item">
              <li className="note">
                <NavLink
                  to={`main/${note.id}`}
                  className={linkClasses}
                >
                  <p className="note__title">{note.title}</p>
                  
                  <div className="note__description">
                    <time className="note__time">
                      {getTimeFormat(note.time)}
                    </time>
                    <p className="note__text">
                      {note.text}
                    </p>
                  </div>
                </NavLink>
              </li>  
            </CSSTransition>
          ))}
      </TransitionGroup>
      </ul>
  );
};

export default NotesList;
