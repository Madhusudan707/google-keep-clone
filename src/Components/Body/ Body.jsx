import { TakeNote, NoteGrid } from "../";

export const Body = () => {
  return (
    <div className="body  w-full   ">
      <div className="flex  w-full  justify-center mt-16 ">
        <TakeNote />
      </div>
      <div className="  w-5/6 mt-12 ml-40 ">
        <NoteGrid />
      </div>
    </div>
  );
};
