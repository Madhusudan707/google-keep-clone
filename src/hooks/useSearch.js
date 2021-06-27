import { useNotes } from "../contexts";
import axios from "axios";


export const useSearch = () => {
  const { notesState,notesDispatch } = useNotes();
 


  
  const search = async (search_string) => {
    if (search_string) {
      
      const lowerSearch = search_string.toLowerCase();
      const data =notesState.notes.filter(function (note) {
        return Object.values(note).some((val) =>
          String(val).toLowerCase().includes(lowerSearch),
         
        );
      });
      notesDispatch ({ type: "ON_SEARCH", payload: { searchedNotes: data } });
     
    } else {
      try {
        const uid = localStorage.getItem("uid")
        const response = await axios.get(`http://localhost:3002/notes/${uid}`);
         
        notesDispatch({type:"INITIAL_DATA",payload:{initialData:response.data.data}})
       
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { search };
};
