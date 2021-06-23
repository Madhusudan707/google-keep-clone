import { useEffect, useState } from "react";
import axios from "axios";
import { Footer,Select,Pin} from "../";

import "./note_grid.css";

// let response
export const NoteGrid = () => {
  const [noteData, setNoteData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3002/notes");
      console.log(response.data.data);
      setNoteData(response.data.data);
    })();
  }, []);

  return (
    <div className="container ">
      {noteData.map((note) => {
        return (
          <div className="text-white border item relative note hover:border-red-500 ">
            <Select/>
            <Pin/>
            <h1 className="text-center">{note.title}</h1>
            <h5 className='mb-6 mt-4'>{note.note}</h5>
            <Footer/>
          </div>
        );
      })}
     
    </div>
  );
};
