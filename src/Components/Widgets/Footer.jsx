import { useNotesData } from "../../hooks";
import { Link } from "react-router-dom";

export const Footer = ({ noteID, msg }) => {
  const { addNoteToArchive, addNoteToTrash } = useNotesData();
  return (
    <div className="absolute bottom-1 w-full left-0 widget ">
      <ul className="text-white flex justify-around items-center w-full ">
        <li className="relative">
          <Link to="">
            <i className="fas fa-palette  cursor-pointer color-palette-icon"></i>
          </Link>
        </li>
        <li className="hidden ">
          <Link to="">
            <i className="fas fa-pen  "></i>
          </Link>
        </li>
        <li>
          <Link
            to=""
            onClick={() => {
              addNoteToArchive(noteID, msg);
            }}
          >
            <i className="fa fa-archive cursor-pointer"></i>
          </Link>
        </li>
        <li>
          <Link
            to=""
            onClick={() => {
              addNoteToTrash(noteID, msg);
            }}
          >
            <i className="far fa-trash-alt"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
