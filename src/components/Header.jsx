import { Button, Navbar, NavbarContent } from "@nextui-org/react";
import { Form, Link, useLoaderData } from "react-router-dom";
import { PiShoppingCartDuotone } from "react-icons/pi";
import SearchProduct from "./ui/SearchProduct";

const Header = () => {
  const { params } = useLoaderData();
  console.log(`params =>`, params);
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarContent>
        <Link className="font-bold text-2xl text-primary">FI store</Link>
      </NavbarContent>
      <NavbarContent justify="center" className="w-80">
        <Form method="get" className="w-full">
          <SearchProduct
            placeholder="Cari Barang..."
            name="name"
            type="search"
            defaultValue={params.name}
          />
        </Form>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded hover:bg-slate-200 p-1 transition duration-300">
            <PiShoppingCartDuotone size={26} />
          </div>
          <div className="flex gap-2 border-l-2 border-slate-400 pl-3">
            <Button variant="bordered" color="primary" size="sm">
              Masuk
            </Button>
            <Button color="primary" size="sm">
              Daftar
            </Button>
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
