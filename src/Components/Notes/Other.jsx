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
    <div className="containerx flex w-full p-2">
      <div className="flex flex-col w-full">
        <div className='w-full'>
            <h1 className="text-white text-sm border-b w-full ">Other</h1>
        </div>
     
        <div className='flex flex-wrap w-full item-center lg:justify-start justify-center'>
      { 
    
      isOtherTrue.length?isOtherTrue.map((note) => {
      
          return (
            <div
              key={note._id}
              className={` text-white border w-64 h-44 p-4  itemx relative note mt-8 ml-4  ${note.bgColor}`}
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
      
      }):<span className=' text-3xl text-center text-white'>Create Some Note</span>}</div>
    </div>
    </div>
  );
};
