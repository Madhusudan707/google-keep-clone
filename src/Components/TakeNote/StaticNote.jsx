

export const StaticNote = ({isShow,onClick}) => {
  return (
    <div className={`${isShow ? "" : "hide"}`}>
      <div className="flex flex-row items-center border justify-center text-white w-1/3 rounded-sm">
        <span
          className="w-full  focus:outline-none  text-gray-300 border-white px-4 py-2 "
          onClick={onClick}
        >
          Take a Note...
        </span>

        <ul className="flex justify-around w-36">
          <li>
            <input type="checkbox" defaultChecked=" " />
          </li>
          <li>
            <i className="fas fa-pencil-alt"></i>
          </li>
          <li>
            <i className="far fa-image"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
