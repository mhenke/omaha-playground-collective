import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
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
          <Link
            href="/admin/posts"
            className={`link ${
              pathname === "/admin/posts" ? "" : "link-hover"
            }`}
          >
            Manage Posts
          </Link>
        </li>
        <li>
          <Link
            href="/admin/playgrounds"
            className={`link ${
              pathname === "/admin/playgrounds" ? "" : "link-hover"
            }`}
          >
            Manage Playgrounds
          </Link>
        </li>
        <li>
          <Link
            href="/admin/age-ranges"
            className={`link ${
              pathname === "/admin/age-ranges" ? "" : "link-hover"
            }`}
          >
            Manage Age Range
          </Link>
        </li>
        <li>
          <Link
            href="/admin/surfaces"
            className={`link ${
              pathname === "/admin/surfaces" ? "" : "link-hover"
            }`}
          >
            Manage Surfaces
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}
