import { useContext } from 'react';
import { useParams } from 'react-router';
import './Header.scss';
import cn from 'classnames';
import { IoAddOutline } from 'react-icons/io5';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { NotesContext } from '../../contexts/NotesContext';

import Search from '../Search/Search';

const Header = () => {
  const { addNote, deleteNote, setIsEditNote, isEditNote } = useContext(NotesContext);
  const { id } = useParams();

  return (
    <header className="header">
      <div className="header__left">
        <button className="btn" onClick={addNote}>
          <IoAddOutline />
        </button>
  
        <button
          className="btn"
          onClick={deleteNote}
          disabled={!id}
        >
          <AiFillDelete />
        </button>
  
        <button
          className={cn('btn', { active: isEditNote })}
          onClick={() => setIsEditNote(!isEditNote)}
          disabled={!id}
        >
          <AiFillEdit />
        </button>
      </div>

      <div className="header__right">
        <Search />
      </div>
    </header>
  );
};

export default Header;
