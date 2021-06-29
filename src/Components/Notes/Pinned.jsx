export const Pinned = ({
  wrapperRef,
  Footer,
  Select,
  Pin,
  ColorPalette,
  notesState,
  pinNote,
  updateIsShow,
  updateNote,
  EditableNotes
}) => {
  const isPinnedTrue = notesState.notes.filter((note) => {
    return note.isPinned;
  });
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-sm border-b ">Pinned Notes</h1>
      {isPinnedTrue.length ?notesState.notes.map((note) => {
        if (note.isPinned) {
          return (
            <div
              key={note._id}
              className={`text-white border item relative note mt-12  ${note.bgColor}`}
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
      }):<span className=' mt-24 text-3xl text-center text-white'>Nothing is Pinned</span>}
    </div>
  );
};
