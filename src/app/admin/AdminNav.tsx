import Link from "next/link";

export default function AdminNav() {
  console.log(window.location.pathname);
  const currentPath = window.location.pathname;

  //remove link-hover if current path matches href
  const isLinkActive = (href) => {
    console.log(href, currentPath);
    return currentPath === href;
  };

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {" "}
        <li>
          <Link
            href="/admin"
            className={`link ${isLinkActive("/admin") ? "" : "link-hover"}`}
          >
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
