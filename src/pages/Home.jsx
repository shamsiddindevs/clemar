import SwiperSlider from "../components/Carusel"
import Category from "../components/Category"
import Partner from "../components/Partner"
import Slider from "../components/Slider"
import Trust from "../components/Trust"

const Home = () => {
  return (
    <>
      <SwiperSlider/>
      <Category type="categories" link={"product-category"}/>
      <Category type="products" link={"product"}/>
      <Category type="paperProducts" link={"product"}/>
      <Trust/>
      <Partner/>
      <Slider/>
    </>
  )
}

export default Home