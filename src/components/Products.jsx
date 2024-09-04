/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Pagination,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Products = ({ initialProducts, initialPagination, initialParams }) => {
  const products = initialProducts;
  const pagination = initialPagination;
  const params = initialParams;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  // Format title dengan batasan panjang
  const formatTitle = (title) => {
    const trimmedTitle = title.slice(0, 30);
    const lastSpaceIndex = trimmedTitle.lastIndexOf(" ");
    return lastSpaceIndex !== -1
      ? `${trimmedTitle.slice(0, lastSpaceIndex)}...`
      : `${trimmedTitle}...`;
  };

  // Format harga menjadi mata uang USD
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };
  //pagination
  const handlePagination = (number) => {
    if (number) {
      const setPage = new URLSearchParams(search);
      setPage.set("page", number);
      navigate(`${pathname}?${setPage.toString()}`);
      console.log(setPage);
    } else {
      console.log("Kesalahn menemuka category");
    }
  };
  return (
    <>
      {products.length === 0 ? (
        <h1>Product tidak ditemukan</h1>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5">
            {products.map((item) => (
              <Card
                key={item._id}
                className="py-4 w-48 sm:w-56 hover:scale-95 m-auto"
              >
                <div>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt={item.name}
                      className="object-contain rounded-xl"
                      src={item.image}
                      width={270}
                      height={200}
                    />
                  </CardBody>
                  <CardFooter className="pt-2 flex-col items-start h-28 gap-1">
                    <h4 className="text-base">{formatTitle(item.name)}</h4>
                    <p className="font-bold">{formatPrice(item.price)}</p>
                    <div className="flex gap-1">
                      <FaStar color="orange" />{" "}
                      <small>Stock : {item.stock}</small>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Pagination
              isCompact
              showControls
              total={pagination.totalPage}
              initialPage={pagination.page}
              onChange={handlePagination}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
