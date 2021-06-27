import {createContext,useContext,useReducer,useState} from 'react'
import {notesReducer,initialState} from '../reducers/notesReducer'

export const NotesContext = createContext({})

export const NotesProvider = ({ children }) => {
    const [state,dispatch] = useReducer(notesReducer,initialState)
    const [isShowToast,setIsShowToast] = useState(false)
    const [toastMessage,setToastMessage] = useState("")
    const [toastColor,setToastColor] = useState("")
    

  return (
    <NotesContext.Provider value={{notesState:state,notesDispatch:dispatch,isShowToast,setIsShowToast,toastMessage,setToastMessage,toastColor,setToastColor}}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = ()=>useContext(NotesContext)