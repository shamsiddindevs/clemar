import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({category, link = "products"}) => {
  return (
    <>
      <div className="mb-2 flex flex-col items-start relative">
        {category?.isNew && (
          <div className="absolute z-10 top-0 left-0 bg-[#019edc] text-white text-xs px-2 py-1">
            Новинка
          </div>
        )}
        <Link to={`/${link}/${link=="products" ? category?.singleLink : category?.link}`}>
          <img
            src={category?.image}
            alt={category?.title}
            className={`w-full mb-5 h-auto ${category?.border && "rounded-2xl"}`}
          />
        </Link>
        {category?.description && (
          <div className="mb-3 font-medium text-xl text-gray-700">
            {category?.description}
          </div>
        )}
        {category?.price && (
          <div className="mb-2">
            {category?.price}
            {category?.oldPrice && (
              <del className="text-gray-500 text-xs ml-2">{category?.oldPrice}</del>
            )}
          </div>
        )}
        <span
          className={`mb-2 font-semibold ${
            category?.description && "text-xs uppercase font-normal"
          }`}
        >
          {category?.title}
        </span>
        {category?.description && (
          <button className="mt-auto inline-block px-6 py-3 bg-[#019edc] text-white gap-1 transition-all text-sm">
            {category?.isNew ? "В корзину" : "Подробнее"}
          </button>
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string,
    isNew: PropTypes.bool,
    catalog: PropTypes.string,
    type: PropTypes.string,
    count: PropTypes.number
  }),
  link: PropTypes.string
};

export default Card;
