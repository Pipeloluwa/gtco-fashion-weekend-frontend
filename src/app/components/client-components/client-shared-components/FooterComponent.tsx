import { useRef } from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
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
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </motion.div>
            </div>


            <div className="lg:col-span-2 flex justify-between mx-4 pt-7">
                <motion.ul
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    >
                    <h6 className="font-medium text-white">SOLUTIONS</h6>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </motion.ul>

                <motion.ul
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    >
                    
                    <h6 className="font-medium text-white">SUPPORT</h6>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                </motion.ul>

                <motion.ul
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    >
                    
                    <h6 className="font-medium text-white">COMPANY</h6>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                    <li className="py-2 text-sm">Careers</li>
                </motion.ul>

                <motion.ul
                    initial= "offscreen"
                    variants={cardVariantsUp4}
                
                    animate= {inView ? "onscreen" : "offscreen"}
                    >
                    
                    <h6 className="font-medium text-white">LEGAL</h6>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                </motion.ul>

            </div>
        </motion.footer>
    );
}

export default FooterComponent;