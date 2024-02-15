import React from 'react'
import { FeaturesStyles } from './featureStyles'
import Feature1 from 'assets/Feature1.png'
import Feature2 from 'assets/Feature2.png'
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
                {/* Do you have stacks of notebooks and loose papers with important notes scattered throughout? With our handwritten notes sharing app, you can digitize your notes and easily organize them in one place. No more lost notes or frantically searching for important information. */}
              
Unlock last-minute success with ReadReuse's Quick Notes – a game-changer for efficient learning. Engineered for instant comprehension, these condensed notes offer a shortcut to essential concepts, ensuring you absorb key information swiftly. Elevate your study experience and maximize your preparation with Quick Notes, making every minute count toward exam success.
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
                    <Image className='img' src={Feature2} alt="" />
                </div>
            </div>
            <div className='right-section'>
                
                <div className='text'>
                {/* Do you have stacks of notebooks and loose papers with important notes scattered throughout? With our handwritten notes sharing app, you can digitize your notes and easily organize them in one place. No more lost notes or frantically searching for important information. */}
                ReadReuse introduces a crucial tool for comprehensive exam preparation – Previous Year Exam Papers. Dive into the wealth of knowledge contained in these papers, providing insights into the exam pattern, question types, and critical topics. Analyze past trends, identify key areas, and refine your strategy for optimal performance. 
                </div>
            </div>
        </div>
    </FeaturesStyles>
  )
}

export default Feature