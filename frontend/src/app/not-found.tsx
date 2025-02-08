export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-6xl font-extrabold text-teal-600 mb-4">404</h2>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for could not be found.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          We couldn't find the requested resource. It might have been moved or
          deleted.
        </p>

        <div className="space-x-4">
          <a
            href="/dashboard"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300"
          >
            Go to Homepage
          </a>
          <a
            href="/contact"
            className="text-teal-600 hover:text-teal-700 text-sm font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
