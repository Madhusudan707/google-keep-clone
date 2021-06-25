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
  