"use client";

import * as React from "react";
import { MoreHorizontal } from "lucide-react";
import { Pie, PieChart, Label } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartContainer,
} from "@/components/ui/chart";
import { useTheme } from "next-themes";
// ข้อมูล mock
const chartData = [
  { name: "Listing views", value: 20, fill: "#A78BFA" }, // purple
  { name: "Listing engagements", value: 26, fill: "#06B6D4" }, // teal
  { name: "Listing segment", value: 38, fill: "#3B82F6" }, // blue
];

const percent = 84;

export function PerformanceDonutCard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card className="rounded-2xl w-full border-2 border-border dark:border-[#131732]  dark:bg-[#111111]  bg-white drop-shadow-2xl shadow-xl">
      <CardHeader className="flex flex-row justify-between items-start space-y-0 pb-2">
        <div>
          <CardTitle className="text-2xl font-medium">
            Discount campaign
          </CardTitle>
          <CardDescription className="text-3xl font-bold text-black dark:text-white">
            $6,045.00
            <Badge className="ml-2 text-xs bg-[#B1D2F7] h-[20px] text-[#3268B0] font-medium">
              +34.05%
            </Badge>
          </CardDescription>
        </div>
        <div className="bg-white cursor-pointer  dark:bg-[#31494C] dark:text-[#88C5DC] size-10 rounded-[20%] drop-shadow-md flex items-center justify-center">
          <MoreHorizontal className="text-muted-foreground h-5 w-5" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center py-4">
        <ChartContainer
          className="aspect-square w-full max-w-[200px]"
          config={{}}
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              stroke={isDark ? "#131732" : "#ffffff"}
              strokeWidth={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox)) return null;
                  const textColor = isDark ? "#ffffff" : "#000000";
                  const subTextColor = isDark ? "#88C5DC" : "#6b7280";
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        dy="-0.4em"
                        x={viewBox.cx}
                        fontSize="29"
                        fontWeight="700"
                        className="mb-2"
                        fill={textColor}
                      >
                        {percent}%
                      </tspan>
                      <tspan
                        dy="2.2em"
                        x={viewBox.cx}
                        fontSize="12"
                        fontWeight="500"
                        fill={subTextColor}
                      >
                        Performance
                      </tspan>
                      <tspan
                        dy="1.2em"
                        x={viewBox.cx}
                        fontSize="12"
                        fontWeight="500"
                        fill={subTextColor}
                      >
                        progress
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Legend */}
        <div className="flex justify-center gap-4 mt-4 text-xs text-muted-foreground">
          {chartData.map((item, index) => (
            <div
              key={index}
              className=" dark:text-[#88C5DC] flex items-center gap-1"
            >
              <span
                className="inline-block w-2 h-2 rounded-full dark:text-[#88C5DC]"
                style={{ backgroundColor: item.fill }}
              />
              {item.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
