import {createContext,useContext,useReducer} from 'react'
import {notesReducer,initialState} from '../reducers/notesReducer'

export const NotesContext = createContext({})

export const NotesProvider = ({ children }) => {
    const [state,dispatch] = useReducer(notesReducer,initialState)

  return (
    <NotesContext.Provider value={{ notesState:state, notesDispatch:dispatch}}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = ()=>useContext(NotesContext)