import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivateLayout = () => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
