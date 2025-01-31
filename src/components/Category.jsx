import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Category({ type, link }) {
  const categories = useSelector((state) => state?.categories[type]);

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-[50px]">
        <h1 className="text-2xl font-bold mb-4 ">{categories?.title} </h1>
        <button className="text-[#017ba6] px-6 py-3 hover:bg-[#017ba6] hover:text-white  flex items-center gap-1 transition-all text-sm">
          Смотреть все <FaArrowRight className="text-xs" />
        </button>
      </div>
      <ul
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${categories?.data?.length} gap-5 items-stretch `}
      >
        {categories?.data?.map((category, index) => (
          <li key={index} className="mb-2  flex flex-col items-start relative">
            {category?.isNew && (
              <div className="absolute z-10 top-0 left-0 bg-[#019edc] text-white text-xs px-2 py-1">
                Новинка
              </div>
            )}
            <Link to={link + "/" + category?.link}>
              <img
                src={category?.img}
                alt="category img "
                className={`w-full mb-5 h-auto ${
                  category?.category || "rounded-2xl"
                }`}
              />
            </Link>
            <span className="mb-2 font-semibold">{category?.title}</span>
            {category?.isNew && (
              <div className="mb-2">
                {category?.price}{" "}
                <del className="text-gray-500 text-xs">
                  {category?.oldPrice}
                </del>
              </div>
            )}
            {category?.category && (
              <div className="mb-3 font-medium text-sm text-gray-700">
                {category?.category}
              </div>
            )}
            {category?.category && (
              <button className="mt-auto inline-block px-6 py-3 bg-[#019edc] text-white  gap-1 transition-all text-sm">
                {category?.isNew ? "В корзину" : "Подробнее"}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
