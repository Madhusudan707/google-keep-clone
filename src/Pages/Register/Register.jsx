import "./register.module.css";
import { useRegister } from "../../hooks";
import { validate } from "../../utilis/inputValidation";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

export const Register = () => {
  const { values, errors, handleChange, registerUser, firebaseServerError } =
    useRegister(validate);
  const { isLoading } = useAuth();
  return (
    <div className="lg:h-screen lg:mt-0 mt-0 flex items-center justify-center w-full  ">
      <div className="h-auto lg:w-1/4 w-3/4  rounded-lg relative text-center text-white lg:border lg:border-gray-300">
        <div>
        <div className='flex items-center justify-center w-full'><img src='icon-192x192.png' className='lg:w-24 lg:h-24 w-16 h-16' alt='logo'/></div> 
          <h1 className=" lg:text-5xl text-3xl p-4 w-full  font-bold">
            NANO NOTES
          </h1>
         
          <span className="text-2xl">Sign up</span>
        </div>
        <div className="text-red-500 mt-8">
          {firebaseServerError && <span>{firebaseServerError}</span>}
        </div>
        <div className="flex flex-col  mt-8 w-full">
          <div className="flex lg:justify-center  w-full">
            <label>
              <input
                type="email"
                className="border text-black p-2 py-4 lg:w-96 w-72 focus:outline-none  focus:border-blue-500"
                name="email"
                onChange={handleChange}
                value={values.email || ""}
              />
              <p className="ml-1 ">Email</p>
            </label>
          </div>
          {errors.email && <span className="text-red-500">{errors.email}</span>}

          <div className="flex lg:justify-center  mt-8 w-full">
            <label>
              <input
                type="password"
                className="border text-black p-2 py-4 lg:w-96 w-72 focus:outline-none focus:border-blue-500"
                name="password"
                onChange={handleChange}
                defaultValue={values.password || ""}
              />
              <p className="ml-1 ">Password</p>
            </label>
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <div className="flex lg:justify-center mt-8 w-full">
            <label>
              <input
                type="password"
                className="border text-black p-2 py-4 lg:w-96 w-72 focus:outline-none focus:border-blue-500"
                name="cpassword"
                onChange={handleChange}
                defaultValue={values.cpassword || ""}
              />
              <p className="ml-1 ">Confirm Password</p>
            </label>
          </div>
          {errors.cpassword && (
            <span className="text-red-500">{errors.cpassword}</span>
          )}
          <div className="flex justify-center mt-12 mb-8 w-full">
            <button
              className="text-2xl p-4 bg-blue-500 lg:w-96 w-72 text-white focus:outline-none focus:bg-gray-500"
              onClick={registerUser}
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "SIGN UP"
              )}
            </button>
          </div>
          <div className="flex justify-center  mb-4 w-full">
            <span>
              Already registered?{" "}
              <Link to="/" className="hover:text-blue-500">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
