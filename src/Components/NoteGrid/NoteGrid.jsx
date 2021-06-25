import { Footer, Select, Pin, ColorPalette } from "../";
import { useNotesData } from "../../hooks";
import "../../styles/note_grid.css";

export const NoteGrid = () => {
  const { notesState } = useNotesData();

  return (
    <div className="container ">
      {notesState.notes.map((note) => {
        return (
          <div
            key={note._id}
            className={`text-white border item relative note hover:border-red-500 ${note.bgColor}`}
          >
            <Select />
            <Pin />
            <h1 className="text-center">{note.title}</h1>
            <h5 className="mb-6 mt-4">{note.note}</h5>
            <ColorPalette noteID={note._id}/>
            <Footer noteID={note._id}/>
          </div>
        );
      })}
    </div>
  );
};
