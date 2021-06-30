export const EditableNotes = ({
  wrapperRef,
  updateIsShow,
  updateNote,
  note,
}) => {
  return (
    <span ref={wrapperRef} onClick={updateIsShow}>
      <h1
        className="text-center focus:outline-none"
        id="title"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyUp={(e) => {
          updateNote(note, e);
        }}
      >
        {note.title}
      </h1>
      <h5
        className="mb-6 mt-4 focus:outline-none"
        id="note"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyUp={(e) => {
          updateNote(note, e);
        }}
      >
        {note.note}
      </h5>
      <span
        id="tag"
        className="border p-1 rounded-lg text-sm text-black  bg-white"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyUp={(e) => {
          updateNote(note, e);
        }}
      >
        {note.tag[0]}
      </span>
    </span>
  );
};
