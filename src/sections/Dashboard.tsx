"use client";
import { CardDashboard } from "@/components/CardDashboard";
import { OverviewChartCard } from "@/components/OverviewChartCard";
import PaymentsTableCard from "@/components/PaymentsTableCard";
import { PerformanceDonutCard } from "@/components/PerformanceDonutCard";
import { ModeToggle } from "@/components/themes/ThemeToggle";
import { Button } from "@/components/ui/button";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Sidebar } from "@/sections/Sidebar";
import { AnimatePresence, motion } from "framer-motion";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed  inset-0 z-50 bg-[linear-gradient(68deg,_rgb(182,226,243)_30%,_rgba(77,161,240,0.993)_100%)]/50 dark:bg-[linear-gradient(140deg,_#091B21_0%,_rgba(77,161,240,0.3)_25%,_#091B21_55%)] backdrop-blur-sm xl:hidden flex"
          >
            <div className="w-[360px] bg-white dark:bg-[#111111] h-full shadow-2xl overflow-y-auto">
              <Sidebar onClose={() => setIsOpen(false)} />
            </div>
            <div className="flex-1" onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Animated Background Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-0 drop-shadow-2xl shadow-md"
      >
        <div className="w-full min-h-[250px] md:min-h-[200px] blur-[160px] bg-[linear-gradient(68deg,_rgba(182,226,243,0.2)_0%,_rgba(77,161,240,0.75)_100%)] dark:bg-[linear-gradient(72deg,_#091B21_0%,_rgba(77,161,240,0.3)_45%,_#091B21_55%)] border-2 border-border dark:border-[#131732] rounded-b-2xl" />
      </motion.div>

      {/* ✅ Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 pt-4 pb-8 w-full"
      >
        {/* Header Section */}
        <div className="flex sm:flex-row justify-between items-center w-full mt-4">
          {/* Left */}
          <div className="flex items-center gap-4 ">
            <div className="bg-white dark:bg-[#31494C] size-10 rounded-[20%] drop-shadow-xl flex items-center justify-center">
              <BsGraphUpArrow className="dark:text-[#88C5DC]" />
            </div>
            <div>
              <h1 className="text-xs font-semibold sm:text-xl">OZ Campaign</h1>
              <p className="text-text-secondary text-xs sm:text-sm dark:text-[#88C5DC]">
                Affiliates Team
              </p>
            </div>
            <div className="flex flex-col text-xs sm:-ml-2 dark:text-[#88C5DC] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
              <FaChevronUp />
              <FaChevronDown />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="bg-white cursor-pointer dark:bg-[#31494C] dark:text-[#88C5DC] size-10 rounded-full drop-shadow-xl flex items-center justify-center">
                <IoNotificationsOutline className="text-xl" />
              </div>
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold h-5 w-5 rounded-full flex items-center justify-center shadow animate-pulse-scale">
                2
              </div>
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="bg-white dark:bg-[#31494C] size-10 rounded-full drop-shadow-xl flex items-center justify-center xl:hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <GiHamburgerMenu className="text-xl dark:text-[#88C5DC]" />
            </div>
          </div>
        </div>

        {/* Title + Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Analytics Dashboard - This month
            </h1>
            <p className="text-text-secondary text-xs dark:text-[#88C5DC]">
              See the analytics from your affiliates program.
            </p>
          </div>
          <Button className="w-full md:w-48 h-12 text-lg bg-[linear-gradient(68deg,_rgba(76,197,241,1)_0%,_rgba(66,120,246,1)_100%)] dark:bg-[linear-gradient(68deg,_#31494C_0%,_#7AB0C4_100%)] drop-shadow-md text-white whitespace-nowrap transition-transform duration-300 ease-in-out hover:scale-105">
            + Invite Affiliates
          </Button>
        </div>

        {/* Cards */}
        <div className="relative z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mt-15 relative z-10"
          >
            <CardDashboard />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4, ease: "easeInOut" }}
                className="lg:col-span-2 drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <OverviewChartCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4, ease: "easeInOut" }}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <PerformanceDonutCard />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4, ease: "easeInOut" }}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <PaymentsTableCard />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
