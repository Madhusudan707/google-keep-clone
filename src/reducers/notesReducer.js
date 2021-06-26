export const initialState = {
    notes: [],
    loading: true,
    message: "",
  };
  
  export const notesReducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_DATA":
        return {
          loading: false,
          notes: action.payload.initialData,
          message: "",
        };
      case "ON_FAILURE":
        return {
          loading: true,
          notes: [],
          message: "Unable to Load Products, Try after sometime",
        };
        case "ADD_NEW_NOTE":
          return {
            loading: false,
            notes: action.payload.newNote,
            message: "New Note Added",
          };
          case "ADD_NOTE_TO_ARCHIVE":
            return {
              loading: false,
              notes: action.payload.archiveNote,
              message: "Note Added To Archive",
            };
          case "ADD_NOTE_TO_TRASH":
            return{
              loading: false,
              notes: action.payload.trashNote,
              message: "Note Added To Trash",
            }
        case "UPDATE_COLOR":
          return {
            loading: false,
            notes: action.payload.updateColor,
            message: "Notes BG Color Updated",
          };

      case "RESET":
        return {
          loading: false,
          data: action.payload,
          message: "Load Initial Data",
        };
      
  
      default:
        return state;
    }
  };
  