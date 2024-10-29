
"use client";
import { rubikFont } from '@/app/fonts/fontsConfig';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue';
import ImageListComponent from '@/app/components/client-components/about-components/ImageListComponent';
import { IDesignerDataBase } from '@/app/interfaces/client-interfaces/HighlightInterfaces';
import DesignersListsComponent from '@/app/components/client-components/highlights-components/DesignersListsComponent';
import DesignersWorksComponent from '@/app/components/client-components/highlights-components/DesignersWorksComponent';






const PageIndex = () => {
  const dispatch= useDispatch();

  
  useEffect(() => {
    dispatch(setNavValue({action: "Highlights"}));
  }, []);


  const designerData: IDesignerDataBase[] =[
    {
       title: 'John Doe',
       image:'https://images.pexels.com/photos/8980686/pexels-photo-8980686.jpeg?auto=compress&cs=tinysrgb&w=600',
       collections: {
        images: [
          'https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600',
           'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
      }
    },
    {
        title: 'Jane Doe',
        image:'https://images.pexels.com/photos/10983111/pexels-photo-10983111.jpeg?auto=compress&cs=tinysrgb&w=600',
        collections: {
          images: [
            'https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
    },
    {
        title: 'Steve Stone',
        image: 'https://images.pexels.com/photos/10435604/pexels-photo-10435604.jpeg?auto=compress&cs=tinysrgb&w=600',
        collections: {
          images: [
            'https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
    },
    {
        title:'Diane Rivers',
        image: 'https://images.pexels.com/photos/10376009/pexels-photo-10376009.jpeg?auto=compress&cs=tinysrgb&w=600',
        collections: {
          images: [
            'https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
    }
     
]


  const images= [
    '/images/pictures/1.webp',
    '/images/pictures/2.webp',
    '/images/pictures/3.webp'
  ]

  const content= `Step into the Spotlight! Explore the Highlights Page to relive the standout moments from the fashion show. Discover captivating designs, iconic runway looks, and behind-the-scenes glimpses of the designer’s vision brought to life. Celebrate creativity and innovation in style!`

  
  return (
    <div className={`${rubikFont.className} -mt-[80px] flex flex-col bg-gray-800`}>

      <ImageListComponent title='Highlights' content={content} images={images}/>

    

      <div className='w-full mx-auto flex'>
        <DesignersListsComponent designerData={designerData}/>

        <DesignersWorksComponent images={designerData[0].collections.images}/>

      </div>

    </div>
  );

}

export default PageIndex;