import { ColorPalette } from "../";
import { useNotesData } from "../../hooks";
import {Link} from "react-router-dom"

export const Footer = ({noteID}) => {
const {addNoteToArchive,addNoteToTrash} = useNotesData()
  return (
    <div className='absolute bottom-1 w-full left-0 widget '>
      <ul className='text-white flex justify-around items-center w-full '>
        {/* <li>
          <a><i className='fa fa-bell'></i></a>
        </li> */}
        {/* <li>
          <a><i className="fas fa-user-plus"></i></a>
        </li> */}
        <li className='relative' >
          <Link to=""><i className="fas fa-palette  cursor-pointer color-palette-icon"> </i></Link>
         
        </li>
        {/* <li>
          <a><i className='fa fa-image'></i></a>
        </li> */}
        <li>
          <Link to="">  <i className="fas fa-pen   "></i></Link>
        </li>
        <li>
          <Link to="" onClick={()=>{addNoteToArchive(noteID)}}><i className='fa fa-archive cursor-pointer'></i></Link>
        </li>
        <li><Link to="" onClick={()=>{addNoteToTrash(noteID)}}><i className="far fa-trash-alt"></i></Link></li>
        {/* <li>
          <Link to=""><i className='fa fa-ellipsis-v'></i></Link>
        </li> */}
      </ul>
    </div>
  );
};
