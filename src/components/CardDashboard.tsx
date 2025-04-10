import { CardDashboardItem } from "./CardDashboardItem";
import {
  FaChartBar,
  FaMousePointer,
  FaShareAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export const CardDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 ">
      <CardDashboardItem
        icon={<FaChartBar className="text-xl" />}
        label="Revenue"
        value="$24.84K"
        change={87.3}
      />
      <CardDashboardItem
        icon={<FaMousePointer className="text-xl" />}
        label="Clicks"
        value="7,852"
        change={-44.2}
      />
      <CardDashboardItem
        icon={<FaShareAlt className="text-xl" />}
        label="Referrals"
        value="54"
        change={87.9}
      />
      <CardDashboardItem
        icon={<FaMoneyBillWave className="text-xl" />}
        label="Payments"
        value="$83.302"
        change={-27.5}
      />
    </div>
  );
};
