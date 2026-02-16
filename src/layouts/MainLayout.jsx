import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/useAuth";
export default function MainLayout({ children }) {
  const { isAuth, user } = useAuth();
  return (
    <>
      <div className="h-20" />
      <Navbar />
      <main>{children}</main>
      {!isAuth ? <Footer /> : null}
      {isAuth && user?.role === "user" ? <Footer /> : null}
    </>
  );
}
