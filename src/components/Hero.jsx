import { HERO_CONTENT } from "../constants";
import './Hero.css';
import profilePic from "../assets/VishalPaswan.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    animate={{ x: 100 }}
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl heading">
                        Vishal Paswan
                    </motion.h1>
                    <motion.span
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }} 
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent work">
                        Contemporary Choreographer
                    </motion.span>
                    <p className="my-3 max-w-xl py-6 font-light tracking-tighter mb-40">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="profilePic" src={profilePic} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Hero;
