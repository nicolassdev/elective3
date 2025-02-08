export default function Login() {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-teal-500 to-teal-400 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/3 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-teal-700">
            Employee Profiling System
          </h2>
          <p className="text-sm text-gray-600">Login to access your account</p>
        </div>
        <form className="flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              className="w-full rounded-lg border border-gray-300 p-3 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full rounded-lg border border-gray-300 p-3 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-teal-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
