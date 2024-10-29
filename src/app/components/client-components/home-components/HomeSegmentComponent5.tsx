import { rubikFont } from "@/app/fonts/fontsConfig";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Button, IconButton } from "@material-tailwind/react";
import DesignerShowcaseDialogComponent from "./DesignerShowcaseDialogComponent";
import { IProduct, IProductsData, ISingleProductData } from "@/app/interfaces/shared-interfaces/ProductsInterfaces";


 
const HomeSegmentComponent5=()=> {

  const clothesCategoryData: IProductsData= {
    vendor_details:{
        name: "Louious Vuitton", 
        whatsapp_no: "923094824223", 
        emaiL: "jlwfhwelj@shlfjsd.sfsd",
        portfolio_link: "www.louious.com",
    },
    products:[
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000}
    ]
     
};


  const shoesCategoryData: IProductsData= {
    vendor_details:{
        name: "Louious Vuitton", 
        whatsapp_no: "923094824223", 
        emaiL: "jlwfhwelj@shlfjsd.sfsd",
        portfolio_link: "www.louious.com",
    },
    products:[
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000}
    ]
     
};


  const shoesAccessoriesCategoryData: IProductsData= {
    vendor_details:{
        name: "Louious Vuitton", 
        whatsapp_no: "923094824223", 
        emaiL: "jlwfhwelj@shlfjsd.sfsd",
        portfolio_link: "www.louious.com",
    },
    products:[
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
        {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000}
    ]
     
};

  const [singleClothesCategoryData, setSingleCategoryData]= useState<ISingleProductData>();

  const [dialogState, setDialogState]= useState(false);

  const sliderRef = useRef<Slider|null>(null);
  const sliderShoesRef = useRef<Slider|null>(null);
  const sliderCapSpecRef = useRef<Slider|null>(null);


  const showSingleProductDialog= (item: IProduct, productType: string) => {
    switch (productType){
      case "cloth":
        setSingleCategoryData(
          {
            vendor_details: {...clothesCategoryData.vendor_details},
            product: {...item}

          } as ISingleProductData
        ); 
        setDialogState(true);

      case "shoe":
        setSingleCategoryData(
          {
            vendor_details: {...clothesCategoryData.vendor_details},
            product: {...item}

          } as ISingleProductData
        ); 
        setDialogState(true);
      
        case "accesory":
          setSingleCategoryData(
            {
              vendor_details: {...clothesCategoryData.vendor_details},
              product: {...item}

            } as ISingleProductData
          ); 
          setDialogState(true);
    }
  }
  

  
  return (

    <div className='flex flex-col justify-center items-center w-[75%] mx-auto gap-y-6'>
      
      {
        dialogState
        &&
        <DesignerShowcaseDialogComponent singleClothesCategoryData={singleClothesCategoryData!} dialogState={dialogState} setDialogState={setDialogState}/>
      }
      
      
      <h1 className='text-5xl tracking-widest text-orange-800'>
          {"Designers' Showcase "}
      </h1>

      <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
          {"From boardrooms to courtrooms to runways and everywhere in between, we all have our unique sense of style, and Together, we are Africa's Finest. "}
      </p>
      

      <div className="mt-4 p-5 flex flex-col gap-y-6 w-full h-full justify-center items-center ">

        {/* ++++++++++++++++++++++++ CLOTHES +++++++++++++++++++++++++++ */}
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center border bg-gray-100 p-5 shadow-xl shadow-300">
          <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
            {"Clothes Category"}
          </h1>

          <div className="image-slider-container flex w-full h-full gap-x-3 justify-center items-center">
            <IconButton onClick={()=> {return sliderRef.current&& sliderRef.current.slickPrev(); }}  className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white">
              <GrLinkPrevious className="size-[20px]"/>
            </IconButton>

            <Slider  
              ref={slider => {
                sliderRef.current = slider;
              }}
              arrows={false}
              dots={false} 
              slidesToShow={3} 
              infinite={true} 
              speed={1400} 
              autoplay={true} 
              pauseOnHover={true}
              className="w-[85%] h-full flex justify-center items-center overflow-hidden rounded-3xl"
            >
              {
                    clothesCategoryData.products.map((item, index) => {
                        return (
                            <div key={`inspirationalKey${index}`} className='overflow-hidden h-[320px] w-[350px] flex justify-center items-center'>
                                
                                <div key={`inspirationalKey${index}`} className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                  <Image priority={true} quality={100} alt='picture' src={item.picture} width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                                  </Image>

                                  <div className='absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                                      <p className={`${rubikFont.className} text-sm text-white tracking-widest`}>
                                          {item.name}
                                      </p>

                                      <p className={`${rubikFont.className} text-lg text-white tracking-widest`}>
                                          {item.price.toLocaleString()}
                                      </p>

                                      <Button onClick={() => showSingleProductDialog(item, "cloth")} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-orange-700/80 small-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`} >
                                          {"Get Now"}
                                      </Button>

                                  </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </Slider>


            <IconButton onClick={()=> {return sliderRef.current&& sliderRef.current.slickNext();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" >
              <GrLinkNext  className="size-[20px]"/>
            </IconButton>   

          </div>
        </div>



        <br />
        <br />
        <br />
          
        {/* ++++++++++++++++++++++++ SHOES +++++++++++++++++++++++++++ */}
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center border bg-gray-100 p-5 shadow-xl shadow-300">
          <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
            {"Shoes Category"}
          </h1>

          <div className="image-slider-container flex w-full h-full gap-x-3 justify-center items-center">
            <IconButton onClick={()=> {return sliderShoesRef.current&& sliderShoesRef.current.slickPrev();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" >
              <GrLinkPrevious className="size-[20px]"/>
            </IconButton>

            <Slider  
              ref={slider => {
                sliderShoesRef.current = slider;
              }}
              arrows={false}
              dots={false} 
              slidesToShow={3} 
              infinite={true} 
              speed={1400} 
              autoplay={true} 
              pauseOnHover={true}
              className="w-[85%] h-full flex justify-center items-center overflow-hidden rounded-3xl"
            >
              {
                    shoesCategoryData.products.map((item, index) => {
                        return (
                            <div key={`shoesCategoryKey${index}`} className='overflow-hidden h-[320px] w-[350px] flex justify-center items-center'>
                                
                                <div key={`shoesCategoryKey${index}`} className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                  <Image priority={true} quality={100} alt='picture' src={item.picture} width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                                  </Image>

                                  <div className='absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                                      <p className={`${rubikFont.className} text-sm text-white tracking-widest`}>
                                          {item.name}
                                      </p>

                                      <p className={`${rubikFont.className} text-lg text-white tracking-widest`}>
                                          {item.price.toLocaleString()}
                                      </p>

                                      <Button onClick={() => showSingleProductDialog(item, "shoe")} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-orange-700/80 small-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                                          {"Get Now"}
                                      </Button>

                                  </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </Slider>


            <IconButton onClick={()=> {return sliderShoesRef.current&& sliderShoesRef.current.slickNext();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" >
              <GrLinkNext  className="size-[20px]"/>
            </IconButton>   

          </div>
        </div>



        <br />
        <br />
        <br />

        {/* ++++++++++++++++++++++++ ACCESSORIES +++++++++++++++++++++++++++ */}
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center border bg-gray-100 p-5 shadow-xl shadow-300">
          <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
            {"Accessories Category"}
          </h1>

          <div className="image-slider-container flex w-full h-full gap-x-3 justify-center items-center">
            <IconButton onClick={()=> {return sliderCapSpecRef.current&& sliderCapSpecRef.current.slickPrev();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" >
              <GrLinkPrevious className="size-[20px]"/>
            </IconButton>

            <Slider  
              ref={slider => {
                sliderCapSpecRef.current = slider;
              }}
              arrows={false}
              dots={false} 
              slidesToShow={3} 
              infinite={true} 
              speed={1400} 
              autoplay={true} 
              pauseOnHover={true}
              className="w-[85%] h-full flex justify-center items-center overflow-hidden rounded-3xl"
            >
              {
                    shoesAccessoriesCategoryData.products.map((item, index) => {
                        return (
                            <div key={`shoesAccessoriesKey${index}`} className='overflow-hidden h-[320px] w-[350px] flex justify-center items-center'>
                                
                                <div key={`shoesAccessoriesKey${index}`} className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-500'>
                                  <Image priority={true} quality={100} alt='picture' src={item.picture} width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                                  </Image>

                                  <div className='absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                                      <p className={`${rubikFont.className} text-sm text-white tracking-widest`}>
                                          {item.name}
                                      </p>

                                      <p className={`${rubikFont.className} text-lg text-white tracking-widest`}>
                                          {item.price.toLocaleString()}
                                      </p>

                                      <Button onClick={() => showSingleProductDialog(item, "accessory")} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-orange-700/80 small-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`} >
                                          {"Get Now"}
                                      </Button>

                                  </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </Slider>


            <IconButton onClick={()=> {return sliderCapSpecRef.current&& sliderCapSpecRef.current.slickNext();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" >
              <GrLinkNext  className="size-[20px]"/>
            </IconButton>   

          </div>
        </div>


      </div>

    </div>
  );
}

export default HomeSegmentComponent5;