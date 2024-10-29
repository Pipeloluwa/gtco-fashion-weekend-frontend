import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';
import { rubikFont } from '@/app/fonts/fontsConfig';
import Image from 'next/image';
import { ISingleProductData } from '@/app/interfaces/shared-interfaces/ProductsInterfaces';


interface IShowcaseData {
    singleClothesCategoryData: ISingleProductData;

    dialogState: boolean;
    setDialogState: Dispatch<SetStateAction<boolean>>;
}


const DesignerShowcaseDialogComponent:React.FC<IShowcaseData>= ({singleClothesCategoryData, dialogState, setDialogState}) => {
    

    return (
        <div className={`${rubikFont.className} tracking-widest pt-10 z-10 flex justify-between mx-auto`}>
            <Dialog
                open= {dialogState}
                handler={() => {setDialogState(false)}} 
                className='bg-white/70 rounded-3xl'
                size='xs'
            >

                <DialogBody className={`${rubikFont.className} tracking-widest flex flex-col gap-y-3 w-full items-center justify-center text-white`}>
                    
                    <div className='relative overflow-hidden h-[300px] w-full mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-600'>
                        <Image quality={100} alt='picture' src={singleClothesCategoryData.product.picture} width={350} height={400} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                        </Image>

                        <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                            <p className="text-sm text-white tracking-widest">
                                {singleClothesCategoryData.product.name}
                            </p>

                            <p className='text-lg text-white tracking-widest'>
                                {singleClothesCategoryData.product.price.toLocaleString()}
                            </p>

                        </div>
                    </div>




                    <div className='text-sm flex flex-col rounded-3xl w-full gap-y-2 p-4 bg-gradient-to-b from-orange-600 to-orange-900'>
                        <h1 className='flex w-full justify-between'>
                            NAME: <span>{singleClothesCategoryData.vendor_details.name}</span>
                        </h1>

                        <h1 className='flex w-full justify-between'>
                            WEBSITE: <span>{singleClothesCategoryData.vendor_details.portfolio_link}</span>
                        </h1>

                        <h1 className='flex w-full justify-between'>
                            PHONE NO: <span>{singleClothesCategoryData.vendor_details.whatsapp_no}</span>
                        </h1>

                        <a target='_blank' rel='noopener noreferrer' href={`https://wa.me/${singleClothesCategoryData.vendor_details.whatsapp_no}`} onClick={() => {}} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-white small-button text-orange-800`}>
                            Contact Whatsapp No
                        </a>

                    </div>



                
                </DialogBody>

            </Dialog>


        </div>
    )
}

export default DesignerShowcaseDialogComponent;
