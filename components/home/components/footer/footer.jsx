import React from 'react'
import { FooterStyles } from './footerStyles'
import googlePlayIcon from 'assets/googlePlayIcon.svg'
import Image from 'next/image'
import MessageIcon from 'assets/MessageIcon.svg'
import PhoneIcon from 'assets/PhoneIcon.svg'

const Footer = () => {
  return (
    <FooterStyles>
        <div className='google-download-wrap'>
            <div className='text'>Download our app from</div>
            <div className='google-img'>
                <Image src={googlePlayIcon} alt="" />
            </div>
        </div>
        <div className='contact-use-section'>
            <div className='text'>
                Contact Us
            </div>
            <div className='flex'>
                <div className='text-contact'>
                    <div className='icon'>
                        <Image src={MessageIcon} alt="" />
                    </div>
                   <span>support@readreuse.in</span>
                </div>
                <div className='text-contact'>
                    <div className='icon'>
                        <Image src={PhoneIcon} alt="" />
                    </div>
                    <span>support@readreuse.in</span>
                </div>
            </div>
        </div>
        <div className='copyright-section'>
        Copyright © 2022. ReadReuse All Right Reserved
        </div>
    </FooterStyles>
  )
}

export default Footer