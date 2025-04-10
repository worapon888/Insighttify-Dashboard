"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  IoSearch,
  IoFilterOutline,
  IoCardOutline,
  IoGitBranch,
  IoKeyOutline,
} from "react-icons/io5";
import { FiHome, FiUsers } from "react-icons/fi";
import { MdOutlinePercent, MdOutlineCheckCircle } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { Card } from "@/components/Card";
import { IoCloseSharp } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dashboardMenus = [
    { icon: <FiHome />, label: "Dashboard" },
    { icon: <FiUsers />, label: "Marketplace" },
    { icon: <FiUsers />, label: "Affiliates" },
    { icon: <MdOutlinePercent />, label: "Referrals" },
    { icon: <IoCardOutline />, label: "Payouts" },
    { icon: <RiGeminiFill />, label: "AI Automations" },
  ];

  const settingsMenus = [
    { icon: <LuSettings />, label: "Campaign Setting" },
    { icon: <IoGitBranch />, label: "Integrations" },
    { icon: <TbWorld />, label: "Domains" },
    { icon: <MdOutlineCheckCircle />, label: "Subscriptions" },
    { icon: <IoKeyOutline />, label: "API Keys" },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: -60, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-[360px] h-screen flex flex-col rounded-r-2xl z-10 drop-shadow-2xl shadow-xl dark:bg-[#111111]"
    >
      {/* กล่องบนสุด (logo + search) พร้อม gradient background แยกออกมา */}
      <div className="relative min-h-[200px] max-h-[200px] overflow-hidden rounded-b-2xl">
        {/* 🔹 Gradient background (เบลอได้นุ่มขึ้น) */}
        <div className="absolute inset-0 z-0 blur-sm">
          <div className="w-full h-full bg-[linear-gradient(140deg,_#4da1f0bb,_rgba(182,226,243,0.23))] dark:bg-[linear-gradient(140deg,_#091B21_0%,_rgba(77,161,240,0.3)_25%,_#091B21_55%)] blur-[40px]" />
        </div>

        {/* 🔸 Content ส่วนบน */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
          {/* Logo + Close */}
          <div className="flex items-center justify-between">
            {mounted && (
              <Image
                src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
                alt="logo"
                width={120}
                height={40}
                className="ml-5 mt-2 h-auto cursor-pointer"
              />
            )}
            <div
              onClick={onClose}
              className="bg-white dark:bg-[#31494C] dark:text-[#88C5DC] xl:hidden size-10 rounded-[20%] shadow flex items-center justify-center cursor-pointer"
            >
              <IoCloseSharp className="text-2xl" />
            </div>
          </div>

          {/* Search + Filter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 transition-transform duration-300 ease-in-out hover:scale-105">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 rounded-full bg-white dark:bg-[#111111] border-none"
              />
            </div>
            <div className="bg-white dark:text-[#88C5DC] dark:bg-[#111111] size-10 rounded-[20%] shadow flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <IoFilterOutline className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔻 เมนูรายการต่าง ๆ */}
      <div className="flex-1 pt-4 px-4 space-y-6 border-border dark:bg-[#111111] dark:border-[#131732] border-2 h-full rounded-b-2xl">
        <MenuGroup title="Dashboard" items={dashboardMenus} />
        <MenuGroup title="Settings" items={settingsMenus} />

        {/* 🔻 Upgrade Plan */}
        <motion.div
          className="p-4 bg-tab rounded-2xl mb-3 drop-shadow-md dark:bg-[#110F0F]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Card />
        </motion.div>
      </div>
    </motion.aside>
  );
};

// ✅ Subcomponent: Grouped Menu
const MenuGroup = ({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ReactNode; label: string }[];
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    <h2 className="text-xs uppercase text-gray-400 mb-2 px-2">{title}</h2>
    <ul className="space-y-1">
      {items.map((item) => (
        <motion.li
          key={item.label}
          whileHover={{ scale: 1.02, x: 4 }}
          transition={{ type: "ease", stiffness: 300 }}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 cursor-pointer text-lg"
        >
          <span className="text-lg dark:text-[#0DAEEB]">{item.icon}</span>
          <span className="dark:text-[#88C5DC]">{item.label}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);
