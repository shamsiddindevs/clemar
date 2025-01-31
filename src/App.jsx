import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyLayouts from "./layouts/MyLayouts";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Categories from "./pages/Category";

// Create Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayouts />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path:"/products/:id",
        element: <Product />
      },
      {
        path:"/product-category/:id",
        element: <Categories />
      }
    ]

  },
  {
    path: "*",
    element: <div>404 Not Found</div>
  }
  
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
