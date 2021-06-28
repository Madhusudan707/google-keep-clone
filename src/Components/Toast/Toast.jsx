export const Toast = ({ message, color }) => {
  return (
    <div className="fixed top-24 right-10">
      <span
        className={`toast ${color === "red" ? "bg-red-500" : "bg-green-500"} `}
      >
        {message}{" "}
      </span>
    </div>
  );
};
