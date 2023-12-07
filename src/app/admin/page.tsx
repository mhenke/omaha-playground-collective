import Link from "next/link";

// pages/index.js
export default function AdminPage() {
  return (
    <div className="min-h-screen px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
      <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
        <h1 className="mb-4 text-3xl font-bold">Welcome to the Admin Panel</h1>
        <nav>
          <ul className="flex-col space-y-4">
            <li>
              <Link
                href="/admin/posts"
                className="text-blue-500 hover:underline"
              >
                Manage Posts
              </Link>
            </li>
            <li>
              <Link
                href="/admin/playgrounds"
                className="text-blue-500 hover:underline"
              >
                Manage Playgrounds
              </Link>
            </li>
            <li>
              <Link
                href="/admin/age-ranges"
                className="text-blue-500 hover:underline"
              >
                Manage Age Range
              </Link>
            </li>
            <li>
              <Link
                href="/admin/surfaces"
                className="text-blue-500 hover:underline"
              >
                Manage Surfaces
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
