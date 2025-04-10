import type { Metadata } from "next";
import { HelveticaNeue } from "./assets/fonts/localfont";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Insightify Dashboard",
  description: "Analytics platform for affiliate marketers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${HelveticaNeue.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
