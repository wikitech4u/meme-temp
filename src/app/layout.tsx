import type { Metadata } from "next";
import "./globals.css";
import { pixelify } from "@/fonts";
import { appConfig } from "@/config";
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";
import Navbar from "@/components/custom/nav-bar";
import Blur from "@/components/custom/blur";
import CustomCursor from "@/components/custom/custom-cursor";

export const metadata: Metadata = {
  title: appConfig.metadata.title,
  description: appConfig.metadata.description,
  openGraph: {
    title: appConfig.metadata.openGraph.title,
    description: appConfig.metadata.openGraph.description,
    siteName: appConfig.metadata.openGraph.siteName,
    images: [
      {
        url: appConfig.metadata.openGraph.image.url,
        width: appConfig.metadata.openGraph.image.width,
        height: appConfig.metadata.openGraph.image.height,
        alt: appConfig.metadata.openGraph.image.alt,
      },
    ],
    locale: appConfig.metadata.openGraph.locale,
    type: appConfig.metadata.openGraph.type as OpenGraphType,
  },
  twitter: {
    ...(appConfig.metadata.twitter.card
      ? {
          card: appConfig.metadata.twitter.card as
            | "summary_large_image"
            | "summary"
            | "player"
            | "app",
        }
      : {}),
    title: appConfig.metadata.twitter.title,
    description: appConfig.metadata.twitter.description,
    creator: appConfig.metadata.twitter.creator,
    images: [appConfig.metadata.twitter.image],
  },
  metadataBase: new URL(appConfig.metadata.canonical),
  icons: {
    icon: appConfig.metadata.icons.icon,
    apple: appConfig.metadata.icons.apple,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelify.className}  antialiased`}
        // style={{ backgroundImage: "url('/fullBackGround.jpg')" }}
      >
        <div className="fixed inset-0 -z-10">
          <Blur img={appConfig.hero.background} />
        </div>
        <Navbar />
        <CustomCursor
          emoji={appConfig.hero.customCursorEmoji}
          glowColor="#4ecdc4"
        />
        {children}
      </body>
    </html>
  );
}
