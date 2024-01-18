import Navbar from "@/components/shared/navbar/Navbar";

export default function VideoLayout({ children }) {
    return (
      <div className="bg-[#060606]">
        <Navbar/>
            {children}
        <h1>Video Footre</h1>
      </div>
    )
  }