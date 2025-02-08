export default function Dashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-teal-700 text-white p-5 flex flex-col">
        <div className="text-center text-2xl font-semibold mb-8">
          <span>Employee Profiling</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <a
                href="/dashboard"
                className="block text-lg text-white hover:bg-teal-600 px-3 py-2 rounded-md"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="block text-lg text-white hover:bg-teal-600 px-3 py-2 rounded-md"
              >
                Employee Profiles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-lg text-white hover:bg-teal-600 px-3 py-2 rounded-md"
              >
                Performance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-lg text-white hover:bg-teal-600 px-3 py-2 rounded-md"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-teal-700">
            Welcome back, Admin!
          </h2>
          <button className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-700">
            Profile Settings
          </button>
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Employee Count */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700">
              Total Employees
            </h3>
            <p className="text-2xl font-bold text-teal-500">120</p>
          </div>

          {/* Card 2: Recent Updates */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700">
              Recent Updates
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Employee John Doe's profile updated.</li>
              <li>New performance review added for Jane Smith.</li>
              <li>Salary adjustments applied to 5 employees.</li>
            </ul>
          </div>

          {/* Card 3: Performance Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700">
              Performance Stats
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-700">Average Performance Score</p>
              <p className="text-2xl font-bold text-teal-500">85%</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Employees & Analytics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">
              Employee Overview
            </h3>
            <p className="text-lg text-gray-600">
              View and manage employee profiles, performance, and more.
            </p>
            <button className="bg-teal-600 text-white py-2 px-4 mt-4 rounded-md shadow-md hover:bg-teal-700">
              Manage Employees
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">
              Analytics
            </h3>
            <p className="text-lg text-gray-600">
              Analyze employee data and performance metrics over time.
            </p>
            <button className="bg-teal-600 text-white py-2 px-4 mt-4 rounded-md shadow-md hover:bg-teal-700">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
