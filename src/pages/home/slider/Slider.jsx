

import SimpleImageSlider from "react-simple-image-slider";
const Slider=()=>{
   const sliderImages = [
     {url: "https://i.ibb.co/ryH6xH2/slider1.png"},
     {url: "https://i.ibb.co/Z1GXbKZ/slider2.png"},
     {url: "https://i.ibb.co/w46T5MB/slider3.png"},
     {url: "https://i.ibb.co/w6W4H8n/slider4.png"},
     {url: "https://i.ibb.co/WWzCDMf/slider5.png"},
     {url: "https://i.ibb.co/zZvxSnS/slider6.png"},
     {url: "https://i.ibb.co/6bWVFr5/slider7.png"},
     {url: "https://i.ibb.co/sRfxBYp/slider8.png"},
     {url: "https://i.ibb.co/mSk5ZZt/slider9.png"},
     {url: "https://i.ibb.co/J54vtnW/slider10.png"},

   ];
   return (
      <div className="w-width mx-auto">
         <SimpleImageSlider
            width={1120}
            height={500}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={10} // 10 second por por slide hobe
         />
      </div>
   );
}
export default Slider