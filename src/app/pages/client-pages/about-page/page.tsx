
"use client";
import { pacificoFont, rubikFont } from '@/app/fonts/fontsConfig';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue';
import ImageListComponent from '@/app/components/client-components/about-components/ImageListComponent';





const PageIndex = () => {
  const dispatch= useDispatch();


  useEffect(() => {
    dispatch(setNavValue({action: "About"}));
  }, []);


  const images= [
    '/images/pictures/1.webp',
    '/images/pictures/2.webp',
    '/images/pictures/3.webp'
  ]

  const content= `The Guaranty Trust Fashion Weekend is a consumer-focused fair and free 
    business platform designed to showcase the best of Africa’s Fashion 
    to a global audience whilst promoting the effervescent enterprise of the 
    continents growing fashion industry.`

  
  return (
    <div className={`${rubikFont.className} -mt-[80px] gap-y-6 flex flex-col`}>

      <ImageListComponent title='About Us' content={content} images={images}/>
      




      <section className='w-[75%] mx-auto flex flex-col gap-12 px-20'>
          <h1 className={`${pacificoFont.className} text-orange-800 text-5xl tracking-widest flex w-full justify-center`}>
            {"Know More About Us"}
          </h1>

          <div className=' leading-9 '>
              <p>
                {`   Created in 2016, The Guaranty Trust Fashion Weekend has become 
                one of the continent's leading platforms for showcasing Africa’s 
                Finest and promoting real commerce for small businesses in the fashion industry.`}
              </p>
              <br></br>

              <p>
                  {`This year, the Guaranty Trust Fashion Weekend is scheduled to hold on 
                  November 9th and 10th, 2024. The two-day event will feature fashion-leaders
                  and industry experts from around the world while providing hundreds of 
                  indigenous small fashion businesses with the opportunity to expand their
                  online presence, reach new markets, and position their businesses for
                  sustainable growth.`}
              </p>
              <br></br>

              <p>
                {`  In addition to its innovative fashion retail experiences, the 2024 Guaranty 
                  Trust Fashion Weekend will feature a series of online masterclasses facilitated
                  by renowned fashion industry experts. A “must-attend” for entrepreneurs and
                  fashion enthusiasts, the masterclasses have been designed to deliver the same
                  quality in content and engagement as previous years, through interactive 
                  webinars that will focus on exploring new and exciting ways to build and 
                  sustain fashion brands in these times and the future.`}
              </p><br></br>

              <p>
                {`The Runway Show will also keep its place at the 2024 GTCO Fashion Weekend. 
                Designed with current realities in mind, the Runway Show will feature a carefully
                curated ensemble of bold and enthralling fashion statements by Africa’s
                Finest Fashion Brands.`}
              </p>
          </div>

      </section>

    </div>
  );

}

export default PageIndex;