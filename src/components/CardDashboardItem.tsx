import { cn } from "@/lib/utils";

interface CardDashboardItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: number;
}

export const CardDashboardItem = ({
  icon,
  label,
  value,
  change,
}: CardDashboardItemProps) => {
  return (
    <div
      className={cn(
        "group bg-white dark:bg-[#1B1B1B] rounded-2xl border border-border dark:border-[#131732]",
        "transition-transform duration-300 ease-in-out transform-gpu will-change-transform",
        "hover:scale-[1.1] hover:shadow-lg"
      )}
      tabIndex={0}
    >
      {/* Header Section */}
      <div className="p-4 flex items-center gap-3">
        <div className="bg-white dark:bg-[#31494C] text-gray-800 dark:text-[#88C5DC] rounded-full w-10 h-10 shadow border border-gray-200 dark:border-[#131732] flex items-center justify-center">
          {icon}
        </div>
        <span className="text-lg font-medium text-text-secondary dark:text-[#88C5DC]">
          {label}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-border bg-gray-200 dark:border-[#131732] h-[1px]" />

      {/* Footer Section */}
      <div className="bg-tab dark:bg-[#111111] px-4 py-3 flex items-end justify-between rounded-b-2xl m-2">
        <span className="text-lg font-semibold text-gray-800 dark:text-white">
          {value}
        </span>
        <div className="text-right text-xs">
          <span
            className={cn(
              "font-semibold",
              change >= 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {change > 0 ? `+${change}%` : `${change}%`}
          </span>
          <div className="text-gray-400 dark:text-white">last period</div>
        </div>
      </div>
    </div>
  );
};
