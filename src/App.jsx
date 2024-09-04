import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivateLayout from "./layouts/PrivateLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DetailProduct from "./components/DetailProduct";

//loader
import { loader as ProductLoader } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    loader: ProductLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: ProductLoader,
      },
      {
        path: "product/:productId",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
