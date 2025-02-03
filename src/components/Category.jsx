import {FaArrowRight} from "react-icons/fa";
import Card from "./Card";

function Category({title, link, data}) {
  console.log(data.length);
  
  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-[50px]">
        <h1 className="text-2xl font-bold mb-4 ">{title} </h1>
        <button className="text-[#017ba6] px-6 py-3 hover:bg-[#017ba6] hover:text-white  flex items-center gap-1 transition-all text-sm">
          Смотреть все <FaArrowRight className="text-xs" />
        </button>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:${data.length > 4 ? "grid-cols-5" : "grid-cols-4"} gap-5 items-stretch `}>
        {data?.map((category, index) => (
         <Card key={index} category={category} link={link} />
        ))}
      </div>
    </div>
  );
}

export default Category;
