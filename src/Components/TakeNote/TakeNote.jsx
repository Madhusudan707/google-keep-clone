import { useState, useRef, useEffect } from "react";
import { useOutSideAlert } from "../../hooks";
import { StaticNote } from "./StaticNote";
import { ActualNote } from "./ActualNote";

export const TakeNote = () => {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const wrapperRef = useRef(null);
  const { isShow, setIsShow } = useOutSideAlert(wrapperRef);

  const handleSwap = () => {
    setIsShow(false);
  };
  const handleEdit = (edit) => {
    if (edit === "title") {
      setIsEditTitle(true);
    } else {
      setIsEditNote(true);
    }
  };
  useEffect(() => {
    setIsEditTitle(false);
    setIsEditNote(false);
  }, [isShow]);

  return (
    <div className="flex w-2/4 justify-center mt-16" ref={wrapperRef}>
      <StaticNote isShow={isShow} onClick={handleSwap} />
      <ActualNote
        isShow={isShow}
        isEditTitle={isEditTitle}
        setIsEditTitle={setIsEditTitle}
        isEditNote={isEditNote}
        setIsEditNote={setIsEditNote}
        onEditTitle={() => {
          handleEdit("title");
        }}
        onEditNote={handleEdit}
      />
    </div>
  );
};
