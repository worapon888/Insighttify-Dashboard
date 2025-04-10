import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

const payments = [
  {
    name: "Gustavo Herwitz",
    email: "gust@avohertz.com",
    referredBy: { name: "Emerson Lubin", initials: "EL", color: "bg-blue-300" },
    method: "Paypal",
    amount: "$70.56",
    status: "Pending",
  },
  {
    name: "Lindsey Stanton",
    email: "lind@seytanto.com",
    referredBy: {
      name: "Angel Schleiter",
      initials: "EL",
      color: "bg-purple-300",
    },
    method: "Stripe",
    amount: "$84.25",
    status: "Done",
  },
];

export default function PaymentsTableCard() {
  return (
    <Card className="rounded-2xl w-full border-border dark:border-[#131732] dark:bg-[#1B1B1B] bg-white drop-shadow-2xl shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header รวมอยู่ใน scroll */}
          <CardHeader className="flex flex-row items-center justify-between bg-tab  dark:bg-[#101010]  px-6 py-4">
            <div>
              <CardTitle className="text-2xl font-medium text-gray-900 dark:text-white ">
                Payments
              </CardTitle>
              <p className="text-sm text-gray-500 dark:text-[#88C5DC]">
                You made 25 sales this period
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="border cursor-pointer border-gray-300 dark:text-[#88C5DC] dark:border-[#131732] dark:bg-[#1B1B1B] text-gray-600"
              >
                Sort by
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="border cursor-pointer border-gray-300 dark:text-[#88C5DC] dark:border-[#131732] dark:bg-[#1B1B1B] text-gray-600"
              >
                Filter
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="border cursor-pointer border-gray-300 dark:text-[#88C5DC] dark:border-[#131732] dark:bg-[#1B1B1B] text-gray-600"
              >
                Monthly
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 cursor-pointer dark:text-[#88C5DC] dark:bg-[#31494C] "
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Table */}
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-secondary bg-gray-50 text-left dark:text-[#88C5DC] dark:bg-[#1B1B1B] ">
                  <th className="py-3 px-6">Affiliates Name</th>
                  <th className="px-6">Payout Email</th>
                  <th className="px-6">Referred By</th>
                  <th className="px-6">Method</th>
                  <th className="px-6">Payment</th>
                  <th className="px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-border dark:border-[#131732] hover:bg-gray-800 cursor-pointer"
                  >
                    <td className="py-3 px-6 font-medium">{item.name}</td>
                    <td className="px-6">{item.email}</td>
                    <td className="px-6">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback
                            className={`${item.referredBy.color} text-white text-xs font-semibold`}
                          >
                            {item.referredBy.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span>{item.referredBy.name}</span>
                      </div>
                    </td>
                    <td className="px-6">{item.method}</td>
                    <td className="px-6">{item.amount}</td>
                    <td className="px-6">
                      <Badge
                        className={`text-xs px-2 py-1 ${
                          item.status === "Done"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
