import { createContext } from "react";
import { Note } from "../types/Note";

type Context = {
  notes: Note[];
  addNote: () => void;
  deleteNote: () => void;
  isEditNote: boolean;
  setIsEditNote: (value: boolean) => void;
  changeNote: (note: Note) => void;
}

export const NotesContext = createContext<Context>({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
  isEditNote: false,
  setIsEditNote: () => {},
  changeNote: () => {},
});