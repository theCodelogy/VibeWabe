import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function AlreadyWatchedLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
