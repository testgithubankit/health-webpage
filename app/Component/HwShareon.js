"use client"
import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';

const HwShareon = () => {
  return (
    <div className='hwShare flex gap-.5'>
      <FacebookShareButton
        url={'https://househealthinc.com'} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
        url={'https://househealthinc.com'} >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton
        url={'https://househealthinc.com'} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={'https://househealthinc.com'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={'https://househealthinc.com'} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  )
}

export default HwShareon