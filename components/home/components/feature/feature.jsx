import React from 'react'
import { FeaturesStyles } from './featureStyles'
import Feature1 from 'assets/Feature1.svg'
import Feature2 from 'assets/Feature2.svg'
import Image from 'next/image'

const Feature = () => {
  return (
    <FeaturesStyles>
        <div className='feature-head'>
        Features
        </div>
        <div className='flex'>
            <div className='left-section'>
                <div className='text'>
                Do you have stacks of notebooks and loose papers with important notes scattered throughout? With our handwritten notes sharing app, you can digitize your notes and easily organize them in one place. No more lost notes or frantically searching for important information.
                </div>
            </div>
            <div className='right-section'>
                <div className='image'>
                    <Image src={Feature1} alt="" />
                </div>
            </div>
        </div>
        <div className='flex flex-mobile'>
            <div className='left-section'>
            <div className='image'>
                    <Image src={Feature2} alt="" />
                </div>
            </div>
            <div className='right-section'>
                
                <div className='text'>
                Do you have stacks of notebooks and loose papers with important notes scattered throughout? With our handwritten notes sharing app, you can digitize your notes and easily organize them in one place. No more lost notes or frantically searching for important information.
                </div>
            </div>
        </div>
    </FeaturesStyles>
  )
}

export default Feature