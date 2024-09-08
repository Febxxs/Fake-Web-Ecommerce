import { Button, Navbar, NavbarContent } from "@nextui-org/react";
import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { PiShoppingCartDuotone } from "react-icons/pi";
import SearchProduct from "./ui/SearchProduct";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../feature/userSlice";

const Header = () => {
  const { params } = useLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/", { replace: true }); // Use replace to avoid going back to login page
  };

  return (
    <Navbar isBordered maxWidth="2xl">
      {/* Brand Section */}
      <NavbarContent>
        <Link className="font-bold text-2xl text-primary">FI Store</Link>
      </NavbarContent>

      {/* Search Section */}
      <NavbarContent justify="center" className="w-80">
        <Form method="get" className="w-full">
          <SearchProduct
            placeholder="Cari Barang..."
            name="name"
            type="search"
            defaultValue={params.name || ""}
          />
        </Form>
      </NavbarContent>

      {/* User and Cart Section */}
      <NavbarContent justify="end">
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="flex flex-col items-end">
            <div className="relative  cursor-pointer">
              <div className="absolute -top-1 -right-1 bg-rose-600 rounded-full w-4 h-4 text-center text-[12px] text-white">
                2
              </div>
              <PiShoppingCartDuotone size={22} />
            </div>
            {user && (
              <small className="text-sm text-slate-700">{user.name}</small>
            )}
          </div>

          {/* User Info and Auth Buttons */}

          {user ? (
            <Button color="primary" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <div className="flex gap-2 border-l-2 border-slate-400 pl-3">
              <Button
                variant="bordered"
                color="primary"
                size="sm"
                onClick={() => navigate("/login")}
              >
                Masuk
              </Button>
              <Button
                color="primary"
                size="sm"
                onClick={() => navigate("/register")}
              >
                Daftar
              </Button>
            </div>
          )}
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
