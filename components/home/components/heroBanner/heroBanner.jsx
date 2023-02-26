import React from 'react'
import { HeroBannerStyles } from './heroBannerStyle'
import HeroImg from 'assets/HeroImg.svg';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <HeroBannerStyles>
        <div className='left-section'>
            <div className='text'>
            Your one-stop shop for learning <br/> and sharing.
            </div>
            <div className='button'>
                <button>Download the app</button>
            </div>
        </div>
        <div className='rigth-section'>
            <Image src={HeroImg} alt={""} />
        </div>
    </HeroBannerStyles>
  )
}

export default HeroBanner