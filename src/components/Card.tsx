"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Card = () => {
  return (
    <motion.div
      className=" relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.4, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 ">
        <p className="text-xs text-text-secondary font-medium dark:text-[#88C5DC] ">
          Upgrade to
        </p>
        <div className="w-[44px] h-[23px]  flex justify-center items-center rounded-md text-white bg-[linear-gradient(110deg,_rgba(86,81,235,1)_0%,_rgba(238,63,81,1)_100%)]">
          <p className="capitalize text-xs">new</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold">Basic</h1>
      <p className="text-xs font-medium text-text-secondary my-2 dark:text-[#c2c2c2] ">
        1,320 Credit Left
      </p>
      <div className="mx-5">
        <div className="w-[100%] h-2 bg-white rounded-full" />
        <div className="w-[50%] h-2 bg-[#D9D9D9] dark:bg-[#88C5DC] rounded-full  absolute -translate-y-2 " />
        <div className="my-3.5 flex items-center justify-center">
          <Button
            className="bg-white cursor-pointer w-full mt-2 text-text-secondary 
    dark:bg-[#242424] dark:text-[#88C5DC] drop-shadow-xl tracking-wider
    transition-transform duration-300 ease-in-out hover:scale-[1.03]"
          >
            Upgrade Plan
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
