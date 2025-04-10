"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CartesianGrid } from "recharts";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { FiRefreshCw } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const data = [
  { date: "06/12", revenue: 90 },
  { date: "13/12", revenue: 20 },
  { date: "20/12", revenue: 233.72 },
  { date: "21/27", revenue: 100 },
  { date: "05/12", revenue: 120 },
];

export const OverviewChartCard = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Card className="relative z-[11] w-full rounded-2xl drop-shadow-2xl border bg-white dark:bg-[#110F0F] border-border dark:border-[#131732]">
      <CardHeader className="flex md:flex-row 2xs:flex-col flex-col justify-between items-start space-y-0 pb-4">
        <div>
          <CardTitle className="text-sm xs:text-2xl font-medium">
            Performance Overview
          </CardTitle>
          <p className="text-sm text-muted-foreground dark:text-[#88C5DC] text-text-secondary">
            Total Revenue
          </p>
          <div className="flex gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">$48,768K</h2>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-[#DBC4F3] text-black h-[20px]">
                ▲ 24.67%
              </Badge>
              <Badge className="bg-[#DBC4F3] text-black  h-[20px]">
                $583.72
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col xs items-start sm:items-end gap-y-1 sm:gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white rounded-md flex items-center dark:bg-[#1B1B1B] dark:text-[#88C5DC]  justify-center mb-3 sm:mb-7 font-normal text-text-secondary"
          >
            last 30 days
            <FaChevronDown className="w-2 h-2 ml-1 text-center" />
          </Button>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <FiRefreshCw className="text-sm font-normal dark:text-[#88C5DC] text-text-secondary" />
            <span className="font-semibold text-black dark:text-[#88C5DC]">
              Update:
            </span>
            <p className="text-text-secondary font-medium dark:text-[#0DAEEB]">
              12.40 PM
            </p>
          </div>
        </div>
      </CardHeader>

      {/* Line Chart */}
      <CardContent className="relative z-10 h-[220px] px-2 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="h-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={true}
                horizontal={true}
                stroke="#c5c6c9"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: isDark ? "#88C5DC" : "#000000" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: isDark ? "#88C5DC" : "#000000" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#1f1f1f" : "#ffffff",
                  borderRadius: 12,
                  border: "none",
                  padding: 12,
                }}
                labelStyle={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: isDark ? "#7BD6F0" : "#3B82F6",
                  marginBottom: 4,
                }}
                itemStyle={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: isDark ? "#ffffff" : "#000000",
                }}
                formatter={(value: number) => [`$${value}`, "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3B82F6"
                strokeWidth={3}
                fill="url(#colorRevenue)"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                className="drop-shadow-lg"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  );
};
