import './register.module.css'
export const Register = () => {
  
    return (
        <div className="lg:h-screen lg:mt-0 mt-12 flex items-center justify-center w-full  ">
      <div className="h-auto lg:w-1/4 w-3/4 bg-white  rounded-lg relative text-center  lg:border lg:border-gray-300">
        <div>
          <h1 className=" lg:text-5xl text-3xl p-4 w-full  font-bold">NOTE-KEEP</h1>
          <span className="text-2xl">Sign up</span>
        </div>
        <div className='flex flex-col  mt-12 w-full'>
          <div className="flex lg:justify-center  w-full">
            <label>
              <input
                type="email"
                className="border py-4 lg:w-96 w-72 focus:outline-none  focus:border-blue-500"
               
              />
              <p className="ml-1 ">Email</p>
            </label>
            
          </div>
          <div className="flex lg:justify-center  mt-12 w-full">
            <label>
              <input
                type="password"
                className="border py-4 lg:w-96 w-72 focus:outline-none focus:border-blue-500"
               
             />
              <p className="ml-1 ">Password</p>
            </label>
          </div>
          <div className="flex lg:justify-center mt-12 w-full">
            <label>
              <input
                type="password"
                className="border py-4 lg:w-96 w-72 focus:outline-none focus:border-blue-500"
              
              />
              <p className="ml-1 ">Confirm Password</p>
            </label>
          </div>
          <div className="flex justify-center mt-16 mb-12 w-full">
          <button className='text-2xl p-4 bg-blue-500 lg:w-96 w-72 text-white focus:outline-none focus:bg-gray-500'>SIGN UP</button>
          </div>
          <div className="flex justify-center  mb-8 w-full">
          <span className='text-1xl hover:text-blue-500 cursor-pointer'>Not registered? Create an account</span>
          </div>
        </div>
      </div>
    </div>
    )
}
