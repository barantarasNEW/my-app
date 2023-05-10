import './Sidebar.scss';
import NotesList from '../NotesList/NotesList';

const Sidebar = () => (
  <aside className="sidebar">
    <NotesList />
    <div className="sidebar__line" />
  </aside>
);

export default Sidebar;
