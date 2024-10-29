import { useRef } from "react";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

import { motion, useInView } from 'framer-motion';
import { cardVariantsUp4 } from "../../../animations/framerAnimation/variants";
import { rubikFont } from "../../../fonts/fontsConfig";

const FooterComponent= () =>{
    const ref= useRef(null);
    const inView = useInView(ref, {amount:0.25, once:true});


    return (
        <motion.footer 
        ref={ref}
        initial= {{visibility: 'hidden'}}
        whileInView={{visibility: 'visible'}} 
        className={`${rubikFont.className} mt-32 py-16 w-full mx-auto grid lg:grid-cols-3 text-white  bg-gradient-to-b from-gray-900 to-black`}>
            
            <div className="mx-4">
                <motion.h1 
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    className="w-full text-3xl font-bold text-white">
                    
                    GTCO Fashion Weekend
                </motion.h1>

                <motion.div 
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    className="flex justify-between md:w-[75%] my-6"
                    >
                    
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </motion.div>
            </div>


            <div className="flex justify-between mx-4 pt-7">
                <motion.ul
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    >
                    <h6 className="font-medium text-white">Pages</h6>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Highlights</li>
                    <li className="py-2 text-sm">Polls</li>
                    <li className="py-2 text-sm">Feeds</li>
                </motion.ul>

                <motion.ul
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    >
                    
                    <h6 className="font-medium text-white">Enroll</h6>
                    <li className="py-2 text-sm">Designer</li>
                    <li className="py-2 text-sm">Model</li>
                </motion.ul>

            </div>
        </motion.footer>
    );
}

export default FooterComponent;