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
  const isOtherTrue = notesState.notes.filter((note) => {
    return (!note.isPinned && !note.isArchive &&!note.isDelete);
  });
  return (
    <div className="container">
      <h1 className="text-white text-sm border-b w-full ">Other</h1>
     
      { 
      isOtherTrue.length?isOtherTrue.map((note) => {
      
          return (
            <div
              key={note._id}
              className={` text-white border item relative note mt-8  ${note.bgColor}`}
            >
              <Select />
              <Pin
                onClick={() => {
                  pinNote(note._id,true);
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
      
      }):<span className=' text-3xl text-center text-white'>Create Some Note</span>}
    </div>
  );
};
