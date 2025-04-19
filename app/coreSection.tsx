
'use client'
import Image from "next/image";
import rightSide from "../public/Group 8.svg";
import courier from "../public/courier.svg";
import track from "../public/track.svg";
import bg from "../public/gb.png";
import { motion } from "framer-motion";
import { useState } from 'react';
import "./globals.css";
import Link from "next/link";

export const CoreSection = () => {
    const [showPassword, setShowPassword] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border-3 border-in border-[#F5F4F4]/36 bg-[#D3D2CE]/65 rounded-[10px] p-4 md:p-0"
        >
            <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 md:gap-4 ">
                <div className="hidden lg:block col-start-2 row-start-1 grad rounded-[10px] m-4">
                    <Image src={rightSide} alt="rightSide" className="w-full h-full p-5" />
                </div>
                <div className="col-start-1 row-start-1">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={itemVariants} className="marhey text-[#A8A290]/70 text-[33px] sm:pl-5 pt-5 font-medium mb-4">
                            Curier
                        </motion.h1>
                    </motion.div>
                    <motion.div 
                        className=" sm:mx-23 md:mx-40 lg:mx-10 space-y-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="flex justify-center items-center lg:justify-start">
                            <Image src={courier} alt="courier" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h2 className="text-[25px] font-medium">Sign in</h2>
                            <p className="text-black/30 font-medium">Welcome back to your favorite Agency</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="h-[0.7px] bg-black/30" />
                        <motion.div variants={itemVariants}>
                            <form>
                                <motion.div 
                                    className="space-y-4"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div variants={itemVariants}>
                                        <div className="mt-1 relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="example@gmail.com"
                                                className="w-full pl-10 pr-3 py-2 border-2 border-[#A9A392] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9A392]"
                                            />
                                        </div>
                                    </motion.div>
                                    
                                    <motion.div variants={itemVariants}>
                                        <div className="mt-1 relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Your Password"
                                                className="w-full pl-10 pr-10 py-2 border-2 border-[#A9A392] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9A392]"
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 border-[#A9A392] rounded-full"
                                            />
                                            <label className="ml-2 text-md font-medium text-black/60">Remember me</label>
                                        </div>
                                        <div>
                                            <Link href="#" className="text-md font-medium text-black/60 hover:text-black">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </motion.div>

                                    <motion.button
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full font-medium bgg text-black py-2 px-4 rounded-md "
                                    >
                                        Login
                                    </motion.button>

                                    <motion.div variants={itemVariants} className="text-center mt-4">
                                        <p className="text-[19px] font-medium text-black/60">
                                            Don't have account? <Link href="#" className="text-[#78653D] hover:underline">Sign up</Link>
                                        </p>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="bg-black/30 h-[0.9px] lg:mx-14 "/>
    
  
                                    <motion.div variants={itemVariants} className="flex items-center justify-center mt-4">
                                        <Link href="#" className="mb-5 flex font-medium items-center text-[17px] text-black/60 hover:text-black">
                                            <Image src={track} alt=""/>
                                            Track your shipping
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};