import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-teal-700 text-white p-5 flex flex-col h-screen">
      <div className="text-center text-2xl font-semibold mb-8">
        Employee Profiling
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="block px-3 py-2 hover:bg-teal-600 rounded-md"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/employees"
              className="block px-3 py-2 hover:bg-teal-600 rounded-md"
            >
              Employees
            </Link>
          </li>
          <li>
            <Link
              href="/performance"
              className="block px-3 py-2 hover:bg-teal-600 rounded-md"
            >
              Performance
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block px-3 py-2 hover:bg-teal-600 rounded-md"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
