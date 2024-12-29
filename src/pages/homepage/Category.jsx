import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import swipe1 from "../../assets/home/slide1.jpg";
import swipe2 from "../../assets/home/slide2.jpg";
import swipe3 from "../../assets/home/slide3.jpg";
import swipe4 from "../../assets/home/slide4.jpg";
import swipe5 from "../../assets/home/slide5.jpg";
import SharedTitle from "../../components/common/SharedTitle";

const Category = () => {
  const swiperConfig = {
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    pagination: {
      clickable: true,
    },
  };
  return (
    <>
      <section>
        <div>
          <SharedTitle
          subHeading={"from 11am to 10pm"}
          heading={"Order Online"}
          ></SharedTitle>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
          pagination={{
            clickable: true,
          }}
          {...swiperConfig}
          modules={[Pagination]}
          className="mySwiper font-Cinzel"
        >
          <SwiperSlide>
            <img src={swipe1} />
            <h1 className="text-center text-4xl -mt-12 text-white">salad</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swipe2} />
            <h1 className="text-center text-4xl -mt-12 text-white">pizza</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swipe3} />
            <h1 className="text-center text-4xl -mt-12 text-white">soups</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swipe5} />
            <h1 className="text-center text-4xl -mt-12 text-white">salad</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swipe4} />
            <h1 className="text-center text-4xl -mt-12 text-white">desert</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swipe1} />
            <h1 className="text-center text-4xl -mt-12 text-white">salad</h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
