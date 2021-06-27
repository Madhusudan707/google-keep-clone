import { useSearch } from "../../hooks/useSearch";

export const Search = () => {
  const { search } = useSearch();
  return (
    <div className="flex w-2/3 p-3  justify-center ">
      <div className="flex items-center rounded-md   bg-white  w-2/3">
        <i className="fa fa-search fa-1x text-gray-500   p-3"></i>
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-none text-white  bg-gray-500 p-2  w-full rounded-sm"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
