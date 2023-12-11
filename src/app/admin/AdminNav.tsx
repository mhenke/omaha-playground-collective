import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {" "}
        <li>
          <Link href="/admin" className="link-hover link">
            Admin Panel
          </Link>
        </li>
        <li>
          <Link href="/admin/posts" className="link-hover link">
            Manage Posts
          </Link>
        </li>
        <li>
          <Link
            href="/admin/playgrounds"
            className={`link ${
              isLinkActive("/admin/playgrounds") ? "" : "link-hover"
            }`}
          >
            Manage Playgrounds
          </Link>
        </li>
        <li>
          <Link href="/admin/age-ranges" className="link-hover link">
            Manage Age Range
          </Link>
        </li>
        <li>
          <Link href="/admin/surfaces" className="link-hover link">
            Manage Surfaces
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}
