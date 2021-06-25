import { useEffect} from "react";
import { useNotes } from "../contexts";
import axios from 'axios'
export const useNotesData = ()=>{
        const {notesState,notesDispatch} = useNotes()
        useEffect(() => {
          (async () => {
            const response = await axios.get("http://localhost:3002/notes");
            console.log(response.data.data);
            notesDispatch({type:"INITIAL_DATA",payload:{initialData:response.data.data}})
          })();
        }, []);

        const changeNoteColor  = async(noteID,bgColor)=>{
            const updatedNotes = notesState.notes.map((note)=>{
               if(note._id===noteID){
                 return {...note,bgColor:bgColor}
               } return note
            })
            notesDispatch({type:"UPDATE_COLOR",payload:{updateColor:updatedNotes}})
            const response = await axios.post("http://localhost:3002/notes/change-color",{id:noteID,bgColor:bgColor})
            console.log(response)
           
            

             
         }
    return {
        notesState,changeNoteColor
    }
}