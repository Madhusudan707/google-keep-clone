import { useLogout } from "../../hooks";

export const Home = () => {
  const { logout } = useLogout();

  return (
    <div>
      I am Home
      <button className="p-4 bg-red-500 text-white" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
