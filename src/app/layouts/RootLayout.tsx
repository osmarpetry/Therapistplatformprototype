import { Outlet } from "react-router";
import { GlassNavbar } from "../components/GlassNavbar";
import { Footer } from "../components/Footer";

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <GlassNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
