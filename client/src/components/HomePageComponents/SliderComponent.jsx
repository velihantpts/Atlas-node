import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow:1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SliderComponent() {
  return (
    <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-64 drop-shadow-lg my-5">
      <Slider {...settings}>
      <div className="p-4">
          <div className="bg-gray-100  shadow-lg p-6 flex items-center">
            <div className="w-1/2">
            <div class="bg-white  overflow-hidden relative">
    <div class="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
            <span class="block">
               Kültür, eğlence ve daha fazlası <span class=" text-indigo-500">
                Atlas</span>'ta hepsi var
            </span>
          
        </h2>
        <p class="text-xl mt-4 text-gray-400">
            Şehrinizde yapacak bir şeyler mi arıyorsunuz? <br></br> Atlas'ı ziyaret ederek, kültür, eğlence ve diğer birçok seçenek hakkında detaylı bilgiye sahip olabilirsiniz.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
            <button type="button" class="py-4 px-6   bg-gradient-to-r from-sky-500 to-blue-500 hover:bg-indigo-700   text-white w-full  text-center text-base font-semibold shadow-md    rounded-lg ">
                <a href="/event"> Keşfet</a>
                </button>
            </div>
        </div>
    </div>
</div>

            </div>
            <div className="w-1/2 pl-4 max-h-sm max-w-2xl">
              <img
                src="https://images.pexels.com/photos/1209751/pexels-photo-1209751.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Placeholder"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
      </div>
      <div className="p-4">
          <div className="bg-gray-100  shadow-lg p-6 flex items-center">
            <div className="w-1/2">
            <div class="bg-white  overflow-hidden relative">
    <div class="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
            <span class="block">
            Otobüs durakları, güzergahlar ve daha fazlasını keşfedin
            </span>
          
        </h2>
        <p class="text-xl mt-4 text-gray-400">
        Atlas, şehir içi seyahatleriniz için ihtiyacınız olan her şeyi tek bir yerde sunar. Otobüs durakları, güzergahlar ve hareket saatlerine kolayca erişebilirsiniz.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
            <button type="button" class="py-4 px-6   bg-gradient-to-r from-sky-500 to-blue-500 hover:bg-indigo-700   text-white w-full  text-center text-base font-semibold shadow-md    rounded-lg ">
                <a href="/transportation"> Keşfet</a>
                </button>
            </div>
        </div>
    </div>
</div>

            </div>
            <div className="w-1/2 pl-4 max-h-sm max-w-2xl">
              <img
                src="https://dr.savee-cdn.com/things/6/4/107dd5880d32ba7a5c0921.webp"
                alt="Placeholder"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
      </div>
      <div className="p-4">
          <div className="bg-gray-100  shadow-lg p-6 flex items-center">
            <div className="w-1/2">
            <div class="bg-white  overflow-hidden relative">
    <div class="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
            <span class="block">
            Yerel işletmeleri keşfetmek için Atlas'ı kullanın
            </span>
          
        </h2>
        <p class="text-xl mt-4 text-gray-400">
        Atlas, şehrinizdeki tüm eğlence mekanlarından restoranlara, fitness merkezlerinden kafelere kadar her türlü işletmeyi bulmanıza olanak tanır. 
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
            <button type="button" class="py-4 px-6   bg-gradient-to-r from-sky-500 to-blue-500 hover:bg-indigo-700   text-white w-full  text-center text-base font-semibold shadow-md    rounded-lg ">
                <a href="/locations"> Keşfet</a>
                </button>
            </div>
        </div>
    </div>
</div>

            </div>
            <div className="w-1/2 pl-4 max-h-sm max-w-2xl">
              <img
                src="https://images.pexels.com/photos/13770418/pexels-photo-13770418.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Placeholder"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
      </div>
      <div className="p-4">
          <div className="bg-gray-100  shadow-lg p-6 flex items-center">
            <div className="w-1/2">
            <div class="bg-white  overflow-hidden relative">
    <div class="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
            <span class="block">
            Şehirdeki tüm etkinlikler bir tık ötenizde
            </span>
          
        </h2>
        <p class="text-xl mt-4 text-gray-400">
        Atlas, şehrinizdeki en popüler etkinlikleri sizin için bir araya getirir. Konserler, sergiler, tiyatro oyunları ve daha fazlası
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-4 px-6   bg-gradient-to-r from-sky-500 to-blue-500 hover:bg-indigo-700   text-white w-full  text-center text-base font-semibold shadow-md    rounded-lg ">
                    <a href="/event"> Keşfet</a>
                </button>
            </div>
        </div>
    </div>
</div>

            </div>
            <div className="w-1/2 pl-4 max-h-sm max-w-2xl">
              <img
                src="https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Placeholder"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
      </div>
  
      </Slider>
    </div>
  );
}

export default SliderComponent;
