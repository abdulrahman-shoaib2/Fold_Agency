// export const F_DISP = "'Barlow Condensed', Impact, sans-serif"
// export const F_SANS = "'Barlow', system-ui, sans-serif"
// export const F_MONO = "'Geist Mono', monospace"
import { Geist, Geist_Mono, Barlow, Barlow_Condensed  } from "next/font/google";


export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-barlow",
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
});


export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
