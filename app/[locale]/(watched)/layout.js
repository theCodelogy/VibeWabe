import PrivateRoute from "@/utils/PraivetRoute/PraivetRoute";
import PrivateByUserRole from "@/utils/PraivetRoute/PrivateByUserRole";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function AlreadyWatchedLayout({ children }) {
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
