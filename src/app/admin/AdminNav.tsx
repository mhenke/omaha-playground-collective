import Link from "next/link";

export default function AdminNav() {
  return (
    <div className="flex justify-center">
      <ul className="menu menu-vertical rounded-box bg-base-200 lg:menu-horizontal">
        <li>
          <Link href="/admin/">Admin Panel</Link>
        </li>
        <li>
          <Link href="/admin/posts">Manage Posts</Link>
        </li>
        <li>
          <Link href="/admin/playgrounds">Manage Playgrounds</Link>
        </li>
        <li>
          <Link href="/admin/age-ranges">Manage Age Range</Link>
        </li>
        <li>
          <Link href="/admin/surfaces">Manage Surfaces</Link>
        </li>
      </ul>
    </div>
  );
}
