import { useLoaderData } from "react-router-dom";
import Caousel from "../components/Caousel";
import Products from "../components/Products";
import axiosInstance from "../feature/axios";
import Category from "../components/ui/Category";

// Loader function to fetch initial data
export const loader = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries());

    console.log("params =>", params); // Verifikasi parameter yang diterima

    const response = await axiosInstance.get("/product", { params });
    const products = response.data.data;
    const pagination = response.data.pagination;

    console.log("response =>", products);
    return { products, pagination, params };
  } catch (error) {
    console.error("Gagal memuat data:", error);
    return { products: [], pagination: {}, params: {} };
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
