import { Divider } from "@nextui-org/react";

import { Form, useNavigate, useLocation } from "react-router-dom";

const Category = () => {
  const listCategory = [
    { name: "Sepatu", value: "sepatu" },
    { name: "Kemeja", value: "kemeja" },
    { name: "Baju", value: "baju" },
    { name: "Celana", value: "celana" },
    { name: "Jaket", value: "jaket" },
  ];

  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  //to find product by category
  const handleCategoryClick = (newCategory) => {
    if (newCategory) {
      const searchCategory = new URLSearchParams(search);
      searchCategory.set("category", newCategory);
      navigate(`${pathname}?${searchCategory.toString()}`);
      console.log(searchCategory);
    } else {
      console.log("Kesalahn menemuka category");
    }
  };
  const handleAllCategory = () => {
    navigate("/");
  };
  return (
    <div className="mb-6 w-full">
      <Form method="get" className="mb-1 flex items-center gap-1 ">
        <h3 className="font-bold">Category :</h3>
        <ul className="flex items-center gap-2">
          <li
            className="hover:text-primary transition cursor-pointer"
            onClick={handleAllCategory}
          >
            All
          </li>
          {listCategory.map((item, index) => (
            <li
              key={index}
              className="hover:text-primary transition cursor-pointer"
              onClick={() => handleCategoryClick(item.value)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Form>
      <Divider />
    </div>
  );
};

export default Category;
