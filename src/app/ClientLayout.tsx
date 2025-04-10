"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/sections/Sidebar";
import { motion } from "framer-motion";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <motion.div
        className="flex min-h-screen relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
      >
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          exit={{ x: -60, opacity: 0 }}
          className="hidden lg:block md:w-[280px] lg:w-[360px] shrink-0"
        >
          <Sidebar />
        </motion.aside>

        <main className="relative flex-1 flex flex-col bg-background text-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* วงกลมซ้ายลอยแนวนอน */}
            <div className="absolute top-[100px] left-[50px] w-[600px] h-[600px] bg-[#4DA1F0] opacity-50 rounded-full blur-[100px] animate-drift-x" />

            {/* วงกลมขวาลอยแนวตั้ง */}
            <div className="absolute top-[400px] right-[200px] w-[600px] h-[600px] bg-[#4DA1F0] opacity-50 rounded-full blur-[100px] animate-drift-x-reverse" />
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
            {children}
          </div>
        </main>
      </motion.div>
    </ThemeProvider>
  );
}
