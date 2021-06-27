import { useNotesData } from "../../hooks";
import {useNotes} from "../../contexts"
import { Footer, Select, Pin, ColorPalette,Toast,EmptyContent } from "../../Components";
import "../../styles/note_grid.css";
export const Archive = () => {
  const { notesState } = useNotesData();
  const {isShowToast,toastMessage,toastColor} = useNotes()
  let isArchiveCount = [];
  notesState.notes.forEach(function (v) {
    isArchiveCount [v.isArchive] = (isArchiveCount [v.isArchive] || 0) + 1;
  });
  return (
    <>
    <div className="archive container    flex items-center justify-start ">
      {isArchiveCount.false !== notesState.notes.length?notesState.notes.map((note) => {     
          return (
            note.isArchive &&
            <div
              key={note._id}
              className={`text-white border item  relative note hover:border-red-500 ${note.bgColor}`}
            >
              <Select />
              <Pin />
              <h1 className="text-center">{note.title}</h1>
              <h5 className="mb-6 mt-4">{note.note}</h5>
              <ColorPalette noteID={note._id} />
              <Footer noteID={note._id} msg={false} />
            </div>
          );
        
       
      }):<EmptyContent message="Archive is Empty"/>}
    </div>
    {isShowToast && <Toast message={toastMessage} color={toastColor}/>}
    </>
  );
};
