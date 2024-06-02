import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function SimpleSlider({ data }) {
    console.log(data)
    if (data)
        return (
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    data.map(tip => (
                        <SwiperSlide className='sliding-tips'><div><span>{tip}</span></div></SwiperSlide>
                    ))}

            </Swiper>
        );
    else {
        return ""
    }
};