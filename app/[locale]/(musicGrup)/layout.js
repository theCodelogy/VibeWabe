import PrivateRoute from "@/components/PraivetRoute/PraivetRoute";
import PrivateByUserRole from "@/components/PraivetRoute/PrivateByUserRole";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function MusicLayout({ children }) {
  return (
    <div>
      <PrivateRoute>
      <PrivateByUserRole>
      <Navbar />
      {children}
      <Footer/>
      </PrivateByUserRole>
      </PrivateRoute>
    </div>
  );
}
