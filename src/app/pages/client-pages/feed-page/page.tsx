
"use client";
import { rubikFont } from '@/app/fonts/fontsConfig';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue';
import ImageListComponent from '@/app/components/client-components/about-components/ImageListComponent';
import FeedListComponent from '@/app/components/client-components/feed-component/FeedListComponent';






const PageIndex = () => {
  const dispatch= useDispatch();

  
  useEffect(() => {
    dispatch(setNavValue({action: "Feeds"}));
  }, []);




  const images= [
    '/images/pictures/1.webp',
    '/images/pictures/2.webp',
    '/images/pictures/3.webp'
  ]

  const content= `Stay Connected in Real-Time! Dive into our Live Social Feed to catch up on the latest updates, trending stories, and engaging conversations. Join the community, share your thoughts, and be a part of the buzz!`

  
  return (
    <div className={`${rubikFont.className} -mt-[80px] gap-y-6 flex flex-col`}>

      <ImageListComponent title='Live Social Feeds' content={content} images={images}/>


      <div className='w-[75%] mx-auto'>
        <FeedListComponent />

      </div>

    </div>
  );

}

export default PageIndex;