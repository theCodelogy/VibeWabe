import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
      <div className="drawer-content p-10">
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
        <ul className="menu p-4 w-60 bg-white min-h-full text-black ">
          {/* Sidebar content here */}
          <li>
            <Link
              className="text-2xl font-bold flex justify-center"
              href={"/video"}
            >
              VibeWabe
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={"/dashboard/alreadyWatched"}>Profile</Link>
          </li>
          <li>
            <Link href={"/dashboard/allVideos"}>All Videos</Link>
          </li>
          <li>
            <Link href={"/dashboard/allMusics"}>All Musics</Link>
          </li>
          <li>
            <Link href={"/dashboard/videoUpload"}>Video Upload</Link>
          </li>
          <li>
            <Link href={"/dashboard/musicUpload"}>Music Upload</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
