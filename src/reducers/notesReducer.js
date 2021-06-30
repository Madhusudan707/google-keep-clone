export const initialState = {
  notes: []
};

export const notesReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return {
        notes: action.payload.initialData,
       
      };
    case "ADD_NEW_NOTE":
      return {
        notes: [...state.notes, action.payload.newNote],
      };
    case "ADD_NOTE_TO_ARCHIVE":
      return {
        notes: action.payload.archiveNote,
      };
    case "ADD_NOTE_TO_TRASH":
      return {
        notes: action.payload.trashNote,
      };
    case "UPDATE_COLOR":
      return {
       
        notes: action.payload.updateColor,
        
      };
    case "UPDATE_NOTE":
      return {
       
        notes: action.payload.updateNotes,
        
      };

    case "ADD_PIN_NOTE":
      return {
       
        notes: action.payload.pinNote,
        
      };

    case "ON_SEARCH":
      return {
        notes: action.payload.searchedNotes,
      };

   

    default:
      return state;
  }
};
