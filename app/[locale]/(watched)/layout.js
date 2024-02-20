import PrivateRoute from "@/components/PraivetRoute/PraivetRoute";
import PrivateByUserRole from "@/components/PraivetRoute/PrivateByUserRole";
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
