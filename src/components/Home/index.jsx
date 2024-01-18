import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { pages, routes, imageUrl } from "@/util/index";

const Categories = () => {
  return (
    <div className="w-full hidden flex-col items-center text-sm ps-10 pt-20 lg:flex">
      <div className="w-2/3 flex flex-col gap-4">
        <span>
          <p>Select from the avaliable categories to</p>
          <p className="font-light text-neutral-500">Keep your self updated</p>
        </span>
        <div className="border my-2"></div>
        <Link to="/">
          <p className="text-lg ml-2">All Categories</p>
        </Link>
        {pages.map((page, index) => (
          <Link
            to={`${routes[2]}/${page}`}
            key={index}
            className="capitalize px-2 py-1 rounded hover:bg-neutral-900"
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

const PostSlider = ({ data }) => {
  return (
    <Swiper
      // spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
          // spaceBetween: 60,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <div className="flex">
        {data &&
          data.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col gap-10 my-14">
                <article>
                  <p className="text-neutral-600">{post.publishedDate}</p>
                  <p className="text-2xl lg:text-3xl">{post.title}</p>
                </article>
                <div className="lg:w-[700px] lg:h-[400px] relative p-5 border border-neutral-100 rounded">
                  <img src={imageUrl(post.imgId)} className="w-full h-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </div>
    </Swiper>
  );
};

const Home = ({ data, className, title }) => {
  return (
    <div className="w-full pt-28 lg:pt-40">
      <div className="capitalize">
        <p
          className={`font-extrabold font-sans text-2xl leading-8 lg:text-6xl ${className}`}
        >
          Latest:
        </p>
        <p className="font-extrabold font-sans text-2xl leading-8 lg:text-6xl">
          {title}
        </p>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-full lg:w-2/3">
          <PostSlider data={data} />
        </div>
        <div className="w-1/2">
          <Categories />
        </div>
      </div>
      <div className="border-b border-neutral-700  lg:w-2/3"></div>
    </div>
  );
};

export default Home;
