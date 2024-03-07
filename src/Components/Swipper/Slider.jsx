import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import bg3 from "../../assets/images/bg1.jpeg";
import bg2 from "../../assets/images/bg2.jpg";
import bg1 from "../../assets/images/bg3.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { RxArrowTopRight } from "react-icons/rx"; // Ensure this is the correct import

const Slider = () => {
  const image = [
    {
      img: bg1,
    },

    {
      img: bg2,
    },

    {
      img: bg3,
    },
  ];

  return (
    <div className="flex flex-col h-[100vh] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] lg:max-w-[90%]"
      >
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" h-[80vh]" style={{ backgroundImage: `url(${item.img})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat' }}>
              <div className="sm:ml-12 ml-6 h-[400px]  grid content-center">
              <h1 className="sm:text-7xl  text-5xl  ">Creatic</h1>
              <div className="mt-3 transition duration-500 ease-in-out ">
                <a className=" text-[20px]  pt-3 pb-3 pr-5 pl-5 rounded-lg  " style={{ backgroundColor: '#51CF48' }} href="">Buy Now </a>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
