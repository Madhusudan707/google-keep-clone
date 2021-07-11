import { useSearch } from "../../hooks/useSearch";
import './search.css'
export const Search = () => {
  const { search } = useSearch();
  return (
    <>
    <div className="flex w-full p-3  justify-center search-lg ">
      <div className="flex items-center rounded-md   bg-white  w-2/3">
        <i className="fa fa-search fa-1x text-white bg-gray-500   p-3"></i>
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-none text-white   p-2  w-full rounded-sm flex justify-center"
          onChange={(e) => {
            search(e.target.value);
          }}
          style={{ background: "#343F56" }}
        />
      </div>
    </div>
    <div className='fixed bottom-0 p-1 w-full search-sm border text-center bg-white '>
    <input
          type="search"
          placeholder="Search"
          className="focus:outline-none text-white bg-red-500   p-2  w-full rounded-sm text-center"
          onChange={(e) => {
            search(e.target.value);
          }}
          style={{ background: "#343F56" }}
        />
    </div>
    </>
  );
};
