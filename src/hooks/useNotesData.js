import { useEffect,useState} from "react";
import { useNotes } from "../contexts";
import axios from 'axios'
export const useNotesData = (isShow)=>{
        const {notesState,notesDispatch,setIsShowToast,setToastMessage,setToastColor} = useNotes()
        const uid = localStorage.getItem("uid")
        const [isNoteChanged, setIsNoteChange] = useState(false);
        const [editTitle, setEditTitle] = useState("");
        const [editNote, setEditNote] = useState("");
        const [editTag, setEditTag] = useState("");
        const [noteID, setNoteID] = useState("");
       

        useEffect(() => {
          (async () => {
            const response = await axios.get(`http://localhost:3002/notes/${uid}`);
         
            notesDispatch({type:"INITIAL_DATA",payload:{initialData:response.data.data}})
            response.data.success &&  toastMsg("Note Loaded Successfully")
          })();
        }, [isShow,notesDispatch,uid]);

        useEffect(() => {
          if (isShow && isNoteChanged) {
            (async () => {
            const response=  await axios.post("http://localhost:3002/notes/update", {
                id: noteID,
                updatedTitle: editTitle,
                updatedNote: editNote,
                updatedTag:editTag
              });
              response.data.success &&  toastMsg("Note Updated Successfully")
            })();
          }
        }, [isShow,editNote,editTitle,isNoteChanged,noteID]);

        const changeNoteColor  = async(noteID,bgColor)=>{
            const updatedNotes = notesState.notes.map((note)=>{
               if(note._id===noteID){
                 return {...note,bgColor:bgColor}
               } return note
            })
            notesDispatch({type:"UPDATE_COLOR",payload:{updateColor:updatedNotes}})
            const response = await axios.post("http://localhost:3002/notes/change-color",{id:noteID,bgColor:bgColor})
            response.data.success &&  toastMsg("Note Color Updated Successfully")
         
            
         }

         const addNoteToArchive = async(noteID,msg=true)=>{
           const archiveNote = notesState.notes.map((note)=>{
             if(note._id===noteID){
               return {...note,isArchive:!note.isArchive,isDelete:false}
             }return note
           })

           
           notesDispatch({type:"ADD_NOTE_TO_ARCHIVE",payload:{archiveNote:archiveNote}})
            const response=await axios.post("http://localhost:3002/notes/archive",{id:noteID})

            const archiveMsg = msg ? "Note Archived Successfully":"Note Unarchived Successfully"
            response.data.success &&  toastMsg(archiveMsg)
         }

         const addNoteToTrash = async(noteID,msg=true)=>{
          const trashNote = notesState.notes.map((note)=>{
            if(note._id===noteID){
              return {...note,isDelete:!note.isDelete,isArchive:false}
            }return note
          })

          notesDispatch({type:"ADD_NOTE_TO_TRASH",payload:{trashNote:trashNote}})
          const response= await axios.post("http://localhost:3002/notes/trash",{id:noteID})
          const trashMsg = msg ? "Note Moved To Trash":"Note Moved to Notes"
          const trashColor= msg ? "delete":""
          response.data.success &&  toastMsg(trashMsg,trashColor)
        }

        const updateNote = (note,e)=>{
            setNoteID(note._id);
            if (e.target.id === "title") {
              setEditTitle(e.target.innerText);
            }else{
              setEditTitle(note.title)
            }
            if (e.target.id === "note") {
              setEditNote(e.target.innerText);
            }else{
              setEditNote(note.note)
            }

            if(e.target.id==="tag"){
              setEditTag(e.target.innerText)
            }else{
              setEditTag(note.tag[0])
            }
            setIsNoteChange(true);
        }

        const toastMsg = (toastMsg,color)=>{
         
          if(color==="delete"){
            setToastColor("red")
          }
          setToastMessage(toastMsg)
          setIsShowToast(true)
          setTimeout(()=>{
            setIsShowToast(false)
            setToastMessage("")
            setToastColor("")
          },2000)
          
        }
         
    return {
        notesState,changeNoteColor,addNoteToArchive,addNoteToTrash,updateNote,toastMsg
    }
}