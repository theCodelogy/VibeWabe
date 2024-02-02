import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function MusicLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
