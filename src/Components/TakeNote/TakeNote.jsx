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
    <div className="fixed top-0 left-1/3 mt-24  w-full" ref={wrapperRef}>
      <StaticNote isShow={isShow} onClick={handleSwap} />
      <ActualNote
        isShow={isShow}
        isEditTitle={isEditTitle}
        isEditNote={isEditNote}
        onEditTitle={() => {
          handleEdit("title");
        }}
        onEditNote={handleEdit}
      />
    </div>
  );
};
