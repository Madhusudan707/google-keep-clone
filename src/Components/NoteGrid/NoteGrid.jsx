import {
  Footer,
  Select,
  Pin,
  ColorPalette,
  Toast,
  Pinned,
  Other,
  EditableNotes,
} from "../";
import { useNotes } from "../../contexts";
import { useNotesData, useOutSideAlert } from "../../hooks";
import { useRef } from "react";
import "../../styles/note_grid.css";

export const NoteGrid = () => {
  const wrapperRef = useRef(null);
  const { isShowToast, toastMessage, toastColor } = useNotes();
  const { isShow, setIsShow } = useOutSideAlert(wrapperRef);
  const { notesState, updateNote, pinNote } = useNotesData(isShow);

  const updateIsShow = () => {
    setIsShow(false);
  };

  return (
    <>
      <Pinned
        wrapperRef={wrapperRef}
        Footer={Footer}
        Select={Select}
        Pin={Pin}
        ColorPalette={ColorPalette}
        notesState={notesState}
        pinNote={pinNote}
        updateIsShow={updateIsShow}
        updateNote={updateNote}
        EditableNotes={EditableNotes}
      />
      <Other
        wrapperRef={wrapperRef}
        Footer={Footer}
        Select={Select}
        Pin={Pin}
        ColorPalette={ColorPalette}
        notesState={notesState}
        pinNote={pinNote}
        updateIsShow={updateIsShow}
        updateNote={updateNote}
        EditableNotes={EditableNotes}
      />
      {isShowToast && <Toast message={toastMessage} color={toastColor} />}
    </>
  );
};
