import PrivateRoute from "@/components/PraivetRoute/PraivetRoute";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function VideoLayout({ children }) {
  return (
    <div>
      <PrivateRoute>
      <Navbar />
      {children}
      <Footer />
      </PrivateRoute>
    </div>
  );
}
