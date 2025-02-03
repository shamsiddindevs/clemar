import SwiperSlider from "../components/Carusel";
import Category from "../components/Category";
import Partner from "../components/Partner";
import Slider from "../components/Slider";
import Trust from "../components/Trust";
import { useSelector } from "react-redux";

const Home = () => {
  const categories = useSelector((state) => state?.categories);
  return (
    <>
      <SwiperSlider />
      <Category
        title="Категории​"
        link={"product-category"}
        data={categories?.filter((category) => category.catalog === "main").map(category => ({id: category.id, link: category.link, image:category.image, title:category.title,border:true}))}
      />
      <Category
        title="Поломоечные машины"
        link={"products"}
        data={categories?.filter((category) => (category.type === "scrubber_product")&&category.catalog !== "main")?.slice(0, 4)}
      />
      <Category
        title="Бумажная продукция​"
        link={"products"}
        data={categories?.filter((category) => (category.type === "paper_product")&&category.catalog !== "main")?.slice(0, 4)}
      />
      <Trust />
      <Partner />
      <Slider />
    </>
  );
};

export default Home;
