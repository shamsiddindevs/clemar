import { useSelector } from "react-redux";
import Category from "../components/Category";

const Categories = () => {
  const categories = useSelector((state) => state?.categories);
  return (
    <div className="mt-40">
      {Object.keys(categories).map((type) => (
        <Category key={type} type={type} link={categories[type]?.link} />
      ))}
    </div>
  );
};

export default Categories;