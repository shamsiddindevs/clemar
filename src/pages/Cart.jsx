import { Link } from "react-router-dom";
import { FiBell } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="container mt-36 mb-24">
      <h1 className="text-xl md:text-3xl lg:text-[30px]   font-bold mb-10">Cart</h1>

      <div className="bg-gray-100 rounded-lg  mb-10">
        <div className="flex items-center p-5  gap-4">
          <FiBell className="text-xl text-gray-800" />
          <p className="text-gray-800  text-md">Ваша корзина пока пуста.</p>
        </div>
      </div>
      <Link
        to="/products"
        className="px-6 py-3 bg-[#019edc] text-white  gap-1 transition-all"
      >
        Вернуться в магазин
      </Link>
    </div>
  );
};

export default Cart;
