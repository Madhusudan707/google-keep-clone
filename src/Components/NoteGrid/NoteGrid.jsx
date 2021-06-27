import { useRef } from "react";
import { Footer, Select, Pin, ColorPalette,Toast } from "../";
import { useNotesData,useOutSideAlert } from "../../hooks";
import {useNotes} from "../../contexts"
import "../../styles/note_grid.css";




export const NoteGrid = () => {
  const wrapperRef = useRef(null);
  const { isShow,setIsShow } = useOutSideAlert(wrapperRef);
  const { notesState,updateNote } = useNotesData(isShow);
  const {isShowToast,toastMessage,toastColor} = useNotes()
 

  const updateIsShow = () => {
    setIsShow(false);
  };

  return (
    <>
    <div className="container">
    
      {notesState.notes.map((note) => {
        if (!note.isDelete && !note.isArchive) {
          return (
            <div
              key={note._id}
              className={`text-white border item relative note hover:border-red-500 ${note.bgColor}`}
            >
              <Select />
              <Pin />
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
              </span>
              <ColorPalette noteID={note._id} />
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
