export const StaticNote = ({ isShow, onClick }) => {
  return (
    <div
      className={`flex flex-row items-center border justify-center text-white w-full rounded-sm shadow-2xl  ${
        isShow ? "" : "hide"
      }`}
    >
      <span
        className="w-full  focus:outline-none  text-gray-300 border-white px-4 py-2 "
        onClick={onClick}
      >
        Take a Note...
      </span>

      <ul className=" justify-around w-36 hidden">
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
  );
};
