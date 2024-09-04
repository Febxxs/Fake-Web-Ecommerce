import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const SearchProduct = ({ name, type, defaultValue, placeholder }) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      variant="bordered"
      className="hover:outline-primary "
      color="primary"
      startContent={<IoSearch className="text-2xl text-slate-500" />}
    />
  );
};

export default SearchProduct;
