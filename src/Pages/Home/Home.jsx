import { TakeNote, NoteGrid } from "../../Components";

export const Home = () => {
  return (
    <>
      <div className="flex  w-full  justify-center mt-16 ">
        <TakeNote />
      </div>
      <div className="w-5/6 mt-12 ml-40 ">
        <NoteGrid />
      </div>
    </>
  );
};
