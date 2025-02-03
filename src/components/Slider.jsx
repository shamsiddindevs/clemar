import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Slider = () => {
  const brands = [
    {
      id: 1,
      name: 'BYD',
      logo: '../../public/assets/byd.png'
    },
    {
      id: 2,
      name: 'ISA Samarkand',
      logo: '../../public/assets/sag.png'
    },
    {
      id: 3,
      name: 'Artel',
      logo: '../../public/assets/artel.png'
    },
    {
      id: 4,
      name: 'BK',
      logo: '../../public/assets/uzair.png'
    },
    {
        id: 5,
        name: 'Artel',
        logo: '../../public/assets/artel.png'
      },
      {
        id: 6,
        name: 'BK',
        logo: '../../public/assets/sofia.png'
      },
    // Add more brands if needed
  ]

  return (
    <section className="container py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active'
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
        className="py-8"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="flex items-center justify-center p-4 bg-white   duration-300">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-w-[150px] h-[100px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider