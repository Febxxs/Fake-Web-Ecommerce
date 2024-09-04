import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../feature/axios";
import { Card, CardBody, Image } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import Purchase from "./ui/Purchase";

const DetailProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const detailProduct = async () => {
    try {
      if (productId) {
        const res = await axiosInstance.get(`/products/${productId}`);
        if (res.status === 200) {
          setProduct(res.data);
        } else {
          console.log("product gagal dimuat ");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product);
  useEffect(() => {
    detailProduct();
  }, []);

  return (
    <section className="flex gap-1 justify-center items-center h-[78vh]">
      <Card className="shadow-none flex-row gap-2 ">
        {/* image */}
        <CardBody className="overflow-visible py-2 ">
          <Image
            alt={product.title}
            className="object-contain rounded-xl"
            src={product.image}
            width={400}
            height={400}
          />
        </CardBody>
        {/* descriiption */}
        <CardBody className=" overflow-scroll max-h-[500px] scrollbar-hide">
          <h3 className="font-bold text-2xl">{product?.title}</h3>
          <p className="flex items-center gap-1 mt-2">
            <span>Terjual : {product.rating?.count}</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <FaStar size={14} color="orange" /> {product.rating?.rate}
            </span>
          </p>
          <h3 className="font-bold text-3xl mt-2">{product?.price}</h3>
          <div className="mt-2 ">
            <h5 className="font-bold text-primary border-b-1 border-slate-300 ">
              Description
            </h5>
            <p className="mt-2">{product?.description}</p>
          </div>
        </CardBody>
        {/* payment */}
        <CardBody>
          <Purchase product={product} />
        </CardBody>
      </Card>
    </section>
  );
};

export default DetailProduct;
