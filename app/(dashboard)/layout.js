import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link className="text-2xl font-bold flex justify-center" href={"/video"}>
              VibeWabe
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={"#"}>Watch list</Link>
          </li>
          <li>
            <Link href={"#"}>Alredy Watched</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
