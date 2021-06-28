export const Other = ({
  wrapperRef,
  Footer,
  Select,
  Pin,
  ColorPalette,
  notesState,
  pinNote,
  updateIsShow,
  updateNote,
  EditableNotes,
}) => {
  return (
    <div className="container">
      <h1 className="text-white text-sm border-b w-full ">Other</h1>
      {notesState.notes.map((note) => {
        if (!note.isDelete && !note.isArchive && !note.isPinned) {
          return (
            <div
              key={note._id}
              className={` text-white border item relative note  ${note.bgColor}`}
            >
              <Select />
              <Pin
                onClick={() => {
                  pinNote(note._id);
                }}
              />
              <EditableNotes
                wrapperRef={wrapperRef}
                updateIsShow={updateIsShow}
                updateNote={updateNote}
                note={note}
              />
              <br /> <br />
              <ColorPalette noteID={note._id} />
              <Footer noteID={note._id} />
            </div>
          );
        }
      })}
    </div>
  );
};
