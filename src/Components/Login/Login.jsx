import "./login.module.css";
export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full overflow-hidden ">
      <div className="h-auto lg:w-1/4 w-3/4 bg-white  rounded-lg relative text-center  lg:border lg:border-gray-300">
        <div>
          <h1 className=" lg:text-5xl text-3xl p-4 w-full  font-bold">NOTE-KEEP</h1>
          <span className="text-2xl">Sign in</span>
        </div>
        <div className='flex flex-col  mt-12'>
          <div className="flex justify-center w-full">
            <label>
              <input
                type="email"
                className="border py-4 lg:w-96 w-80 focus:outline-none focus:border-blue-500"
              />
              <p  className="ml-1 placeholder ">Email</p>
            </label>
            
          </div>
          <div className="flex justify-center mt-12 w-full">
            <label>
              <input
                type="password"
                className="border py-4 lg:w-96 w-80 focus:outline-none focus:border-blue-500"
              />
              <p  className="ml-1 placeholder ">Password</p>
            </label>
          </div>
          <div className="flex justify-center mt-4 w-full">
                <a href='!#' className=' text-1xl hover:text-blue-500'>Forget Password?</a>

          </div>
          <div className="flex justify-center mt-16 mb-12 w-full">
              <button className='text-2xl p-4 bg-blue-500 lg:w-96 w-72 text-white focus:outline-none focus:bg-gray-500'>LOGIN</button>
          </div>
          <div className="flex justify-center  mb-8 w-full">
              <span className='text-1xl hover:text-blue-500 cursor-pointer'>Not registered? Create an account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
