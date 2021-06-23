import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";

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
    <div className="container">
      {noteData.map((note) => {
        return (
          <div className="text-white border item">
            <h1>{note.title}</h1>
            <h5>{note.note}</h5>
          </div>
        );
      })}
    </div>
  );
};
