import { Macondo, Pixelify_Sans } from "next/font/google";

export const pixelify = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export const macondo = Macondo({
  weight:["400"],
  subsets: ["latin"],
  variable: "--font-macondo-sans",

});
