import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">Quality Shoes</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              culpa, impedit debitis repellat blanditiis rerum sequi obcaecati
              quasi quisquam mollitia excepturi ab nisi pariatur id natus.
              Optio, sequi. Aut, impedit?
            </div>
            <button className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Ayakkabi_Siyah_B75807_01_standard.jpg"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">Quality Shoes</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              culpa, impedit debitis repellat blanditiis rerum sequi obcaecati
              quasi quisquam mollitia excepturi ab nisi pariatur id natus.
              Optio, sequi. Aut, impedit?
            </div>
            <button className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Ayakkabi_Beyaz_FX5501_01_standard.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
