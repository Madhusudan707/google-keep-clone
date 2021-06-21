export const ActualNote = ({isShow,isEditTitle,isEditNote,onEditTitle,onEditNote}) => {
    return (
        <div
        className={`border   w-1/3 text-white rounded-sm  ${
          isShow ? "hide" : ""
        }`}
      >
        <div className="flex flex-row items-center justify-center   w-full">
          <span
            contentEditable="true"
            className="w-full focus:outline-none  text-2xl border-white px-4 py-2"
            onClick={onEditTitle}
          >
            {isEditTitle ? "" : "Title"}
          </span>
          <ul className="flex justify-around w-12  ">
            <li>
              <i className="fas fa-thumbtack   "></i>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center   w-full">
          <span
            contenteditable="true"
            className={`w-full focus:outline-none   border-white px-4 py-2`}
            onClick={onEditNote}
          >
            {isEditNote ? "" : "Take a note..."}
          </span>
        </div>
        <div className=" flex  w-full mt-4 ">
          <ul className="flex justify-around  w-96">
            <li>
              <i className="far fa-bell"></i>
            </li>
            <li>
              <i className="fas fa-user-plus"></i>
            </li>
            <li>
              <i className="fas fa-palette"></i>
            </li>
            <li>
              <i className="far fa-image"></i>
            </li>
            <li>
              <i className="fas fa-archive"></i>
            </li>
            <li>
              <i className="fas fa-ellipsis-v"></i>
            </li>
            <li>
              <i className="fas fa-undo"></i>
            </li>
            <li>
              <i className="fas fa-redo"></i>
            </li>
          </ul>
          <div className="flex justify-end items-end w-1/3 px-4">
            <button>Close</button>
          </div>
        </div>
      </div>
    )
}
