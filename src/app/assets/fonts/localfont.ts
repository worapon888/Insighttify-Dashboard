import localFont from "next/font/local";

export const HelveticaNeue = localFont({
  src: [
    {
      path: "./HelveticaNeue-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./HelveticaNeue-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./HelveticaNeue-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./HelveticaNeue-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "./HelveticaNeue-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap", // โหลดเร็วขึ้น
  variable: "--font-helvetica", // ถ้าจะใช้ร่วมกับ Tailwind
});
