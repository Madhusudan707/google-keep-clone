import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useNotesData,useBaseURL } from "../../hooks";
import { useNotes } from "../../contexts";
export const ActualNote = ({
  isShow,
  isEditTitle,
  isEditNote,
  onEditTitle,
  onEditNote,
  setIsEditTitle,
  setIsEditNote,
}) => {
  const {baseURL} = useBaseURL()
  const titleRef = useRef();
  const noteRef = useRef();
  const tagRef = useRef();
  const [title, setTitle] = useState("Title");
  const [activeNote, seActiveNote] = useState(false);
  const { toastMsg } = useNotesData();
  const { notesDispatch } = useNotes();

  const handleChangeTitle = () => {
    if (titleRef.current.innerHTML.length === 0) {
      setIsEditTitle(false);
      setTitle("Title");
      seActiveNote(false);
    } else {
      seActiveNote(true);
    }
  };
  const handleChangeNote = () => {
    if (noteRef.current.innerHTML.length === 0) {
      setIsEditNote(false);
      setIsEditTitle(false);
    } else {
      seActiveNote(true);
    }
  };

  useEffect(() => {
    (async () => {
      const uid = localStorage.getItem("uid");

      if (
        isShow &&
        (titleRef.current.innerText || noteRef.current.innerText) &&
        activeNote &&
        uid
      ) {
        const response = await axios.post(`${baseURL}/notes`, {
          uid: uid,
          title: titleRef.current.innerText,
          note: noteRef.current.innerText,
          tag: tagRef.current.value || titleRef.current.innerText,
        });

        notesDispatch({
          type: "ADD_NEW_NOTE",
          payload: { newNote: response.data.note },
        });

        response.data.success && toastMsg("Note Added Successfully");
      }
    })();
    // eslint-disable-next-line
  }, [isShow]);

  return (
    <div
      className={`border   w-full text-white lg:ml-0 m-8 rounded-sm shadow-2xl  ${
        isShow ? "hide" : ""
      }`}
    >
      <div className="flex flex-row items-center justify-center   w-full">
        <span
          ref={titleRef}
          contentEditable="true"
          suppressContentEditableWarning={true}
          className="w-full focus:outline-none  text-2xl border-white px-4 py-2"
          onClick={onEditTitle}
          onKeyUp={handleChangeTitle}
        >
          {isEditTitle ? "" : title}
        </span>
      </div>
      <div className="flex flex-row items-center justify-center   w-full">
        <span
          ref={noteRef}
          contentEditable="true"
          suppressContentEditableWarning={true}
          className={`w-full focus:outline-none   border-white px-4 py-2`}
          onClick={onEditNote}
          onKeyUp={handleChangeNote}
        >
          {isEditNote ? "" : "Take a note..."}
        </span>
      </div>
      <div className="flex mt-8  justify-start  w-full relative pb-4">
        <input
          ref={tagRef}
          className="text-black w-36 ml-4 mb-4  text-center focus:outline-none border"
          list="tag"
          name="tag"
          id="tag"
          placeholder="Add Tag"
        />
        <datalist id="tag"></datalist>
        <span className="text-sm absolute lg:left-44  lg:bottom-7 bottom-0  left-4 mb-2">
          Click Outside to save your note.
        </span>
      </div>
    </div>
  );
};
