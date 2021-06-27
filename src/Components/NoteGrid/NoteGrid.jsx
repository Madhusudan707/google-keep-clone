import { useRef } from "react";
import { Footer, Select, Pin, ColorPalette,Toast,EmptyContent } from "../";
import { useNotesData,useOutSideAlert } from "../../hooks";
import {useNotes} from "../../contexts"
import "../../styles/note_grid.css";




export const NoteGrid = () => {
  const wrapperRef = useRef(null);
  const { isShow,setIsShow } = useOutSideAlert(wrapperRef);
  const { notesState,updateNote,pinnedNote } = useNotesData(isShow);
  const {isShowToast,toastMessage,toastColor} = useNotes()
 

  const updateIsShow = () => {
    setIsShow(false);
  };

  
  return (
    <>
    <div className="flex flex-col">
    <h1 className='text-white text-sm border-b '>Pinned Notes</h1>
    {notesState.notes.map((note)=>{
      if(note.isPinned){
        return (
          <div
            key={note._id}
            className={`text-white border item relative note mt-12  ${note.bgColor}`}
          >
            <Select />
            <Pin onClick={()=>{pinnedNote(note._id)}} />
            <span ref={wrapperRef} onClick={updateIsShow}>
              <h1
                className="text-center focus:outline-none"
                id="title"

                contentEditable="true"
                suppressContentEditableWarning={true}
                onKeyUp={(e) => {
                  updateNote(note, e);
                }}
              >
                {note.title}
              </h1>
              <h5
                className="mb-6 mt-4 focus:outline-none"
                id="note"
                contentEditable="true"
                suppressContentEditableWarning={true}
                onKeyUp={(e) => {
                  updateNote(note,e);
                }}
              >
                {note.note}
              </h5>
              <span id="tag"  className='border p-1 rounded-lg text-sm text-black  bg-white' contentEditable="true"
                suppressContentEditableWarning={true} onKeyUp={(e)=>{updateNote(note,e)}} >{note.tag[0]}</span>
            </span>
            <br/> <br/>
            {/* <ColorPalette noteID={note._id} /> */}
            <Footer noteID={note._id} />
          </div>
         
        );
      }
    })}
    </div>
    <div className="container">
    
    <h1 className='text-white text-sm border-b w-full '>Other</h1>
      {notesState.notes.map((note) => {
        if (!note.isDelete && !note.isArchive || !note.isPinned) {
          return (
            
            
            <div
              key={note._id}
              className={` text-white border item relative note  ${note.bgColor}`}
            >
              <Select />
              <Pin onClick={()=>{pinnedNote(note._id)}} />
              <span ref={wrapperRef} onClick={updateIsShow}>
                <h1
                  className="text-center focus:outline-none"
                  id="title"

                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  onKeyUp={(e) => {
                    updateNote(note, e);
                  }}
                >
                  {note.title}
                </h1>
                <h5
                  className="mb-6 mt-4 focus:outline-none"
                  id="note"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  onKeyUp={(e) => {
                    updateNote(note,e);
                  }}
                >
                  {note.note}
                </h5>
                <span id="tag"  className='border p-1 rounded-lg text-sm text-black  bg-white' contentEditable="true"
                  suppressContentEditableWarning={true} onKeyUp={(e)=>{updateNote(note,e)}} >{note.tag[0]}</span>
              </span>
              <br/> <br/>
              {/* <ColorPalette noteID={note._id} /> */}
              <Footer noteID={note._id} />
            </div>
          
          );
        }
      })}
    </div>
    {isShowToast && <Toast message={toastMessage} color={toastColor}/>}
    </>
  );
};
