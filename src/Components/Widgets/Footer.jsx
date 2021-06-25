import { ColorPalette } from "../";
import { useNotesData } from "../../hooks";

export const Footer = ({noteID}) => {
const {addNoteToArchive} = useNotesData()
  return (
    <div className='absolute bottom-1 w-full left-0 widget '>
      <ul className='text-white flex justify-around items-center w-full '>
        <li>
          <a><i className='fa fa-bell'></i></a>
        </li>
        <li>
          <a><i className="fas fa-user-plus"></i></a>
        </li>
        <li className='relative' >
          <a><i className="fas fa-palette  cursor-pointer color-palette-icon"> </i></a>
         
        </li>
        <li>
          <a><i className='fa fa-image'></i></a>
        </li>
        <li>
          <a onClick={()=>{addNoteToArchive(noteID)}}><i className='fa fa-archive cursor-pointer'></i></a>
        </li>
        <li>
          <a><i className='fa fa-ellipsis-v'></i></a>
        </li>
      </ul>
    </div>
  );
};
