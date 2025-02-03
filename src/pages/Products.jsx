import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = useSelector((state) => state?.categories).filter(
    (category) => category.catalog === "main"
  );
  return (
    <div className="container  mt-36 mb-24 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productCategories.map((category) => (
          <Link
            key={category.id}
            to={`/product-category/${category.link}`}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square mb-4 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-900 font-medium">{category.title}</h3>
              <span className="text-gray-500">({category.count})</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;