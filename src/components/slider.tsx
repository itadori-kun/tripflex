"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

export const Slider = () => {
    return (
        <Swiper
            effect={ 'cards' }
            grabCursor={ true }
            modules={ [ EffectCards ] }
            className='mySwiper w-full h-full'
        >
            <SwiperSlide className='flex items-center justify-center text-2xl font-bold bg-red-100'>
                slide 1
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center text-2xl font-bold bg-red-200'>
                slide 2
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center text-2xl font-bold bg-red-300'>
                slide 3
            </SwiperSlide>
        </Swiper>
    )

}