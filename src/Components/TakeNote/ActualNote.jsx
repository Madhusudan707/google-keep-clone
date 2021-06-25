import {useRef,useEffect,useState} from 'react'
import axios from 'axios'

export const ActualNote = ({isShow,isEditTitle,isEditNote,onEditTitle,onEditNote,setIsEditTitle,setIsEditNote}) => {

  const titleRef = useRef()
  const noteRef = useRef()
  const [title,setTitle] = useState("Title")
  const [activeNote,seActiveNote]=useState(false)
  const handleChangeTitle = (e)=>{
   
  
    if(titleRef.current.innerHTML.length===0){
      setIsEditTitle(false)
      setTitle("Title")
      seActiveNote(false)
    }else{
      seActiveNote(true)
    }
  }
  const handleChangeNote = (e)=>{
    console.log(noteRef.current.innerText)
    if(noteRef.current.innerHTML.length===0){
      setIsEditNote(false)
      setIsEditTitle(false)
    }else{
      seActiveNote(true)
    }
  }

  useEffect(()=>{
  
    (async()=>{
      const uid = localStorage.getItem("uid")
     
      if(isShow && ((titleRef.current.innerText || noteRef.current.innerText) && activeNote && uid) ){
        
        const response =await axios.post("http://localhost:3002/notes",{
          uid:uid,
          title:titleRef.current.innerText,
          note:noteRef.current.innerText
        })
      }
    })()
   
  },[isShow])

    return (
        <div
        className={`border   w-2/3 text-white rounded-sm  ${
          isShow ? "hide" : ""
        }`}
      >
        <div className="flex flex-row items-center justify-center   w-full">
          <span ref={titleRef}
            contentEditable="true"
            suppressContentEditableWarning={true}
            className="w-full focus:outline-none  text-2xl border-white px-4 py-2"
            onClick={onEditTitle}
            onKeyUp={handleChangeTitle}
          >
            {isEditTitle ? "" : title}
          </span>
          <ul className="flex justify-around w-12  ">
            <li>
              <i className="fas fa-thumbtack   "></i>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center   w-full">
          <span ref={noteRef}
            contentEditable="true"
            suppressContentEditableWarning={true}
            className={`w-full focus:outline-none   border-white px-4 py-2`}
            onClick={onEditNote}
            onKeyUp={handleChangeNote}
          >
            {isEditNote ? "" : "Take a note..."}
          </span>
        </div>
        <div className=" flex  w-full mt-4 ">
          <ul className="flex justify-around  w-96">
            <li>
              <i className="far fa-bell"></i>
            </li>
            <li>
              <i className="fas fa-user-plus"></i>
            </li>
            <li>
              <i className="fas fa-palette"></i>
            </li>
            <li>
              <i className="far fa-image"></i>
            </li>
            <li>
              <i className="fas fa-archive"></i>
            </li>
            <li>
              <i className="fas fa-ellipsis-v"></i>
            </li>
            <li>
              <i className="fas fa-undo"></i>
            </li>
            <li>
              <i className="fas fa-redo"></i>
            </li>
          </ul>
          <div className="flex justify-end items-end w-1/3 px-4">
            <button>Close</button>
          </div>
        </div>
      </div>
    )
}
