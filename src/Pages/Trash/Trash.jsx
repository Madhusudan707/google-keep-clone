import { useNotesData } from "../../hooks";
import { useNotes } from "../../contexts";
import {
  Footer,
  Select,
  Pin,
  Toast,
  EmptyContent,
} from "../../Components";
import "../../styles/note_grid.css";
export const Trash = () => {
  const { notesState, pinNote } = useNotesData();
  const { isShowToast, toastMessage, toastColor } = useNotes();

  const isTrashTrue = notesState.notes.filter((note) => {
    return note.isDelete;
  });
  return (
    <>
       <div className="body containerx flex w-full p-2 mt-16">
       <div className='flex flex-wrap w-full item-center lg:justify-start justify-center'>
        {isTrashTrue.length ? (
          notesState.notes.map((note) => {
            return (
              note.isDelete && (
                <div
                  key={note._id}
                  className={`text-white border w-64 h-44 p-4  itemx relative note mt-8 ml-4 ${note.bgColor}`}
                >
                  <Select />
                  <Pin
                    onClick={() => {
                      pinNote(note._id,true);
                    }}
                  />
                  <h1 className="text-center">{note.title}</h1>
                  <h5 className="mb-6 mt-4">{note.note}</h5>
                  
                  <Footer noteID={note._id} msg={false} />
                </div>
              )
            );
          })
        ) : (
          <EmptyContent message="Trash is Empty" />
        )}</div>
      </div>
      {isShowToast && <Toast message={toastMessage} color={toastColor} />}
    </>
  );
};
