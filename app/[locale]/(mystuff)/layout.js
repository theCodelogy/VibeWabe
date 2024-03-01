import PrivateRoute from "@/utils/PraivetRoute/PraivetRoute";
import PrivateByUserRole from "@/utils/PraivetRoute/PrivateByUserRole";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function MusicLayout({ children }) {
  return (
      <PrivateRoute>
      <PrivateByUserRole>
      <Navbar />
      {children}
      <Footer />
      </PrivateByUserRole>
      </PrivateRoute>
  );
}
