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

export const Archive = () => {
  const { notesState, pinNote } = useNotesData();
  const { isShowToast, toastMessage, toastColor } = useNotes();

  const isArchiveTrue = notesState.notes.filter((note) => {
    return note.isArchive;
  });

  return (
    <>
      <div className="archive container    flex items-center justify-start ">
        {isArchiveTrue.length ? (
          notesState.notes.map((note) => {
            return (
              note.isArchive && (
                <div
                  key={note._id}
                  className={`text-white border item  relative note hover:border-red-500 ${note.bgColor}`}
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
          <EmptyContent message="Archive is Empty" />
        )}
      </div>
      {isShowToast && <Toast message={toastMessage} color={toastColor} />}
    </>
  );
};
