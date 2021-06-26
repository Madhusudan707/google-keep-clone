import { useEffect} from "react";
import { useNotes } from "../contexts";
import axios from 'axios'
export const useNotesData = ()=>{
        const {notesState,notesDispatch} = useNotes()
        const uid = localStorage.getItem("uid")
        useEffect(() => {
          (async () => {
            const response = await axios.get(`http://localhost:3002/notes/${uid}`);
           console.log(response)
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
            
         }

         const addNoteToArchive = async(noteID)=>{
          
           const archiveNote = notesState.notes.map((note)=>{
             if(note._id===noteID){
               return {...note,isArchive:!note.isArchive,isDelete:false}
             }return note
           })

           notesDispatch({type:"ADD_NOTE_TO_ARCHIVE",payload:{archiveNote:archiveNote}})
            await axios.post("http://localhost:3002/notes/archive",{id:noteID})
         }

         const addNoteToTrash = async(noteID)=>{
          const trashNote = notesState.notes.map((note)=>{
            if(note._id===noteID){
              return {...note,isDelete:!note.isDelete,isArchive:false}
            }return note
          })

          notesDispatch({type:"ADD_NOTE_TO_TRASH",payload:{trashNote:trashNote}})
           await axios.post("http://localhost:3002/notes/trash",{id:noteID})
        }
         
    return {
        notesState,changeNoteColor,addNoteToArchive,addNoteToTrash
    }
}