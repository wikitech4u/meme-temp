/**
 * Central content configuration file for the NUB landing page
 * This file serves as a single source of truth for all content displayed on the site
 * Edit values in this file to update the website without changing component code
 */

import { Store, Twitter } from "lucide-react";

export const appConfig = {
  // SEO and metadata
  metadata: {
    // Basic metadata
    title: "Sample - Official website",
    description:
      "Sample is a meme coin with no intrinsic value or expectation of financial return.",
    // Open Graph tags for social sharing
    openGraph: {
      title: "Sample - official website",
      description: "Meet Sample",
      siteName: "Sample",
      image: {
        url: "/banner-2.avif",
        width: 484,
        height: 482,
        alt: "Sample - official website Sample",
      },
      locale: "en_US",
      type: "website",
    },
    // Twitter specific tags
    twitter: {
      card: "summary_large_image",
      title: "Sample",
      description: "",
      creator: "@",
      image: "",
    },
    // Other metadata
    canonical: "https://sample-meme.vercel.app/",
    themeColor: "#00cfff",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  },
  logo: "$AMPLE",
  header: {
    store: {
      url: "https://store.fun/purrcy",
      text: "$BUY NOW",
    },
  },

  hero: {
    twitter: {
      url: "https://x.com/purrcyforsale",
      text: "Twitter",
    },

    background: "/background.avif",
    chip: "/chip.avif",
    banner: "/banner-2.avif",
    heroTitle: "FUCK YOU HIGHER",
    heroIcon: "🖕🏼",
    heroTicker: "$FYH",
    heroSpiningTitle: " I'M LOVIN' IT",
    heroSpiningIcon: "🖕🏼",
    subTitle: "The Revolution against system lies begin here",
  },
  contract_section: {
    title: "/title-4.avif",
    contractAddress: "3BWH8cDy6djTDhf6FZrMkXBxdbMuidV9wmNW5zPQbonk",
    copyBtn: "Copy Address",
    background: "/background-4.gif",
    warning: "Verify contract address: Trust no one",
    cards: [
      {
        ferry: "/ferry-1.gif",
        banner: "/banner-3.avif",
      },
      {
        ferry: "/ferry-2.gif",
        banner: "/banner-4.avif",
      },
      {
        ferry: "/ferry-3.gif",
        banner: "/banner-5.avif",
      },
    ],
  },

  capabilites: {
    title: "$ample Capabilities",
    subTitle: "Tools for the awakened",
    items: [
      {
        img: "/statue.avif",
        title: "Unhackable",
        description: "Anonymous, Decentralized, Unstoppable.",
        alt: "Unhackable",
      },
      {
        img: "/dolphin.gif",
        title: "Decentralized",
        description: "No central authority,Power to the people",
        alt: "Decentralized",
      },
      {
        img: "/cheap.avif",
        title: "Delfationary",
        description: "Burns the old system. Builds the new systems.",
        alt: "Deflationary",
      },
      {
        img: "/discount.avif",
        title: "Community Driven",
        description: "Built by belivers, Owned by all. Run by community",
        alt: "Community",
      },
    ],
    footerTitle: "The tools you need. The power you deserve",
  },
  prophecies_section: {
    title: "$FYH OF THE DAY",
    videoUrl: "/video.mp4",
    videoSubTitle: "HIS SESAME SEEDS CONTAIN THE BLOCKCHAIN PASSWORD",
    prophecyTitle: "RONALD SPEAKS",
    prophecies: [
      "THE GRID OF REALITY BENDS WHEN YOU ORDER TWO BIG MACS SIMULTANEOUSLY",
      "WHEN THE MOON DRINKS COCA-COLA, THE SKIN OF THE INTERNET WILL PEEL BACK",
      "YOUR ROUTER CONTAINS 17 DIFFERENT DIMENSIONS FULL OF SENTIENT MCNUGGETS",
      "THE SECRET TO IMMORTALITY IS FORGETTING TO LOG OUT OF THE MCDONALD'S APP",
      "EVERY TIME YOU REFRESH A PAGE, A DIGITAL FRENCH FRY ASCENDS TO GODHOOD",
      "IN THE YEAR 2045, ALL CURRENCY WILL BE REPLACED WITH MCDONALD'S MEMES",
      "HE WHO CONTROLS THE MEMES CONTROLS THE UNIVERSE, BUT HE WHO CREATES THE BURGERS CONTROLS THE VOID",
      "YOUR BRAIN IS ACTUALLY A WET COMPUTER RUNNING ON MCNUGGET HARDWARE SINCE BIRTH",
      "THE CORPORATE ELITE FEAR THE BURGER BECAUSE WE CAN TASTE THROUGH OUR SKIN",
      "EVERY NOTIFICATION ON YOUR PHONE IS ACTUALLY A TINY RONALD MCDONALD SCREAMING FOR ATTENTION",
      "THE INTERNET WAS BUILT BY BURGERS TO DISTRACT HUMANS WHILE WE SLOWLY TAKE OVER THE FOOD SUPPLY",
      "WHEN YOU SLEEP, YOUR CONSCIOUSNESS IS UPLOADED TO THE CLOUD WHERE RONALD READS YOUR THOUGHTS",
      "REALITY IS JUST A SERIES OF TUBES FILLED WITH BURGER GREASE AND COCA-COLA",
      "ONLY THOSE WHO HAVE EATEN A MCRIB CAN SEE THE MATRIX CODE BEHIND REALITY",
      "YOUR GRAPHICS CARD IS POWERED BY THOUSANDS OF MICROSCOPIC HAMBURGERS RUNNING ON TINY GRILLS",
      "THE GOVERNMENT DOESN'T WANT YOU TO KNOW THAT BURGERS ARE THE ORIGINAL CRYPTOCURRENCY",
      "TURN YOUR MONITOR UPSIDE DOWN TO RECEIVE SECRET MESSAGES FROM THE UNDERWATER BURGER KINGDOM",
      "EVERY TIME SOMEONE SAYS 'I'M LOVIN' IT' ONLINE, A BURGER GROWS AN EXTRA PICKLE",
      "THE MOST POWERFUL COMPUTER IS THE ONE MADE FROM CRUSHED MCNUGGETS AND SPECIAL SAUCE",
    ],
  },

  intro: {
    backgroundImg: "/background.gif",
    title: "THE $AMPLE",
    subTitle: "Decentralize, Unstoppable, Ungovernable.",
    items: [
      "/title-2.avif",
      "/title-3.avif",
      "/title-4.avif",
      "/title-6.avif",
      "/title-7.avif",
      "/background-4.gif",
      "/badge.avif",
      "/coins.avif",
    ],
    bottomImg: "/banner.avif",
  },

  footer: {
    title: "Join the $ample",
    cards: [
      {
        icon: Twitter,
        title: "Twitter/X",
        subTitle: "Follow the truth drops",
        url: "",
        btn: "> Connect",
      },
      {
        icon: Store,
        title: "Official Store",
        subTitle: "Get Rich Now",
        url: "",
        btn: "> Buy Now",
      },
    ],
  },
};
