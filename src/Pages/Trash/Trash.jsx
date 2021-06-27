import { useNotesData } from "../../hooks";
import { useNotes } from "../../contexts";
import {
  Footer,
  Select,
  Pin,
  ColorPalette,
  Toast,
  EmptyContent,
} from "../../Components";
import "../../styles/note_grid.css";
export const Trash = () => {
  const { notesState } = useNotesData();
  const { isShowToast, toastMessage, toastColor } = useNotes();

  const isTrashTrue = notesState.notes.filter((note)=>{
    return note.isDelete  
  })
  return (
    <>
      <div className="body container    flex items-center justify-start ">
        {isTrashTrue.length? (
          notesState.notes.map((note) => {
            return (
              note.isDelete && (
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
              )
            );
          })
        ) : (
          <EmptyContent message="Trash is Empty" />
        )}
      </div>
      {isShowToast && <Toast message={toastMessage} color={toastColor} />}
    </>
  );
};
