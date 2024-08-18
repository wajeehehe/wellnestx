import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SimpleSlider({ data, childClass }) {
    if (data)
        return (
            <Swiper
                modules={[A11y]}
                autoplay={true}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

            >

                {
                    data.map(tip => (
                        <SwiperSlide className={childClass}><div><span>{tip}</span></div></SwiperSlide>
                    ))}

            </Swiper>
        );
    else {
        return ""
    }
};