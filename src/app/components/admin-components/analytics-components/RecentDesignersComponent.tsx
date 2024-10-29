import Image from 'next/image';
import React from 'react'

interface IDesignerUsersBase{
    username: string;
    created: Date;
    picture: string;
}


interface IDesignerUsers{
    designerUsers: IDesignerUsersBase[]
}


const RecentDesignersComponent:React.FC<IDesignerUsers> = ({designerUsers}) => {
    
    return (
        <div className="lg:col-span-3 flex flex-col justify-center mt-2 mb-16 w-full border rounded-lg bg-white shadow-md shadow-gray-500 px-8 py-6 hover:scale-105 duration-300 hover:border-2 hover:border-yellow-500">
            <div className="text-header  mt-2 mb-10">
                Recent Designers
            </div>


            <div className="xl:grid xl:grid-cols-3 flex flex-col w-full gap-x-2 xl:gap-y-0 gap-y-6">
                {
                    designerUsers.map((item, index) => 
                        <div key={`recentUser${index}`} className="bg-orange-50 flex flex-col w-full justify-between mx-auto border rounded-3xl p-4">
                            <div className="my-picture-style rounded-2xl mb-3 flex w-full h-[100px]">
                                <Image alt="" quality={100} width={100} height={0} src={item.picture} className="my-image-cover-style w-[100%] h-[100%] flex"></Image>
                            </div>
                            
                            <h1 className="lg:text-[12px] sm:text-[12px] text-[9px] font-bold text-center w-[62px] mx-auto truncate">{item.username}</h1>
                            <h1 className="lg:text-[11px] sm:text-[11px] text-[8px] italic w-[80px] truncate">
                                {`${Math.floor((item.created.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days ago`}
                            </h1>

                            <button className="my-button-style my-shadow-style lg:text-[9px] lg:py-2 sm:py-3 py-2 sm:text-[13px] text-[9px]">
                                View
                            </button>
                        </div>
                    )
                }

            </div>

            <button className="my-button-border-style my-shadow-style lg:text-base text-[14px] h-[60px]">
                View all Designers
            </button>
        </div>

    );
}

export default RecentDesignersComponent