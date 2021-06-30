import { TakeNote, NoteGrid,Loading } from "../../Components";
import { useNotesData} from "../../hooks";
export const Home = () => {
  const { isNotesLoading } = useNotesData();
  return (
    <>
      <div className="flex  w-full  justify-center mt-16 ">
        <TakeNote />
      </div>
      <div className="w-5/6 mt-12 ml-40 ">
       {isNotesLoading?<Loading toggle="opacity-50"/>: <NoteGrid />}
      </div>
    </>
  );
};
