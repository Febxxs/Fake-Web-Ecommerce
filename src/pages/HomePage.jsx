import { useLoaderData } from "react-router-dom";
import Caousel from "../components/Caousel";
import Products from "../components/Products";
import axiosInstance from "../feature/axios";
import Category from "../components/ui/Category";
import { useEffect } from "react";

// Loader function to fetch initial data
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await axiosInstance.get("/product", { params: params });
    const products = response.data.data;
    const pagination = response.data.pagination;

    console.log(`params => `, params);
    console.log(`request =>`, request);
    console.log(`response =>`, products);
    return { products, pagination, params };
  } catch (error) {
    console.error("Failed to load initial data:", error);
    return { products: [], pagination: {} };
  }
};

const HomePage = () => {
  const { products, pagination, params } = useLoaderData();

  return (
    <main>
      <Caousel />
      <Category />
      <Products
        initialProducts={products}
        initialPagination={pagination}
        initialParams={params}
      />
    </main>
  );
};

export default HomePage;
