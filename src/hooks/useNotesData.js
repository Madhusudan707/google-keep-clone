import { useEffect} from "react";
import { useNotes } from "../contexts";
import axios from 'axios'
export const useNotesData = ()=>{
        const {notesState,notesDispatch} = useNotes()
        const uid = localStorage.getItem("uid")
        useEffect(() => {
          (async () => {
            const response = await axios.get(`http://localhost:3002/notes/${uid}`);
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

         const addNoteToArchive = async(noteID)=>{
           console.log(noteID)
           const archiveNote = notesState.notes.map((note)=>{
             if(note._id===noteID){
               return {...note,isArchive:!note.isArchive}
              // console.log("yes")
             }return note
           })

           notesDispatch({type:"ADD_NOTE_TO_ARCHIVE",payload:{archiveNote:archiveNote}})
           const response = await axios.post("http://localhost:3002/notes/archive",{id:noteID})

           console.log(archiveNote)
         }
    return {
        notesState,changeNoteColor,addNoteToArchive
    }
}