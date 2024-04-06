'use client'

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules'
import { useEffect } from 'react';
import 'swiper/css';
import Styles from './Slider.module.css'

export const Slider = () => {
    useEffect(() => {
        new Swiper(".swiper");
    }, []);
    return (
        <div className='swiper'>
            <div className={`swiper-wrapper ${Styles['slider']}`}>
                <div className='swiper-slide'>
                    <img src="/images/1.jpg" alt="" width="500" />
                </div>
                <div className='swiper-slide'>
                    <img src="/images/2.jpg" alt="" width="500" />
                </div>
                <div className='swiper-slide'>
                    <img src="/images/3.jpg" alt="" width="500" />
                </div>
                <div className='swiper-slide'>
                    <img src="/images/школа.jpg" alt="" width="500" />
                </div>
            </div>
        </div>
    )
}