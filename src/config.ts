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
    title: "$FYH- Official website",
    description:
      "Sample is a meme coin with no intrinsic value or expectation of financial return.",
    // Open Graph tags for social sharing
    openGraph: {
      title: "$FYH - official website",
      description: "The Revolution against system lies begin here",
      siteName: "$FYH",
      image: {
        url: "/banner-share.gif",
        width: 484,
        height: 482,
        alt: "$FYH - official website $FYH",
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
  logo: "$FYH",
  header: {
    store: {
      url: "https://pump.fun/board",
      text: "$BUY NOW",
    },
  },

  hero: {
    twitter: {
      url: "https://x.com/",
      text: "Twitter",
    },

    background: "/fullBackGround.jpg",
    customCursorEmoji: "🖕🏼",
    chip: "/chip.avif",
    heroTitle: "FUCK YOU HIGHER",
    heroIcon: "🖕🏼",
    heroTicker: "$FYH",
    heroSpiningTitle: " I'M LOVIN' IT",
    heroSpiningIcon: "🖕🏼",
    feinModeActiveBTN: "ACTIVATE FEIN MODE",
    feinModeDeactiveBTN: "DEACTIVATE FEIN MODE",
    activeAudioBTN: "AWAKEN MCSOUNDS",
    deActiveAudioBTN: "SILENCE MCSOUNDS",
  },
  social_section: {
    title: "HOME DIMENSION",
    copyBtn: "Copy Address",
    contractAddress: "3BWH8cDy6djTDhf6FZrMkXBxdbMuidV9wmNW5zPQbonk",
    xBTN: {
      title: " JOIN THE $FYH (X Community)",
      url: "https://x.com/",
    },
    telegramBTN: {
      title: " JOIN THE TELEGRAM",
      url: "https://t.me/",
    },

    dexscreenerBTN: {
      title: "Join The DEXSCREENER",
      url: "https://dexscreener.com/",
    },
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
    leaks: {
      title: "$FYHLEAKS",
      revealedBTN: "REVEAL BURGER TRUTH",
      hideBTN: "HIDE BURGER TRUTH",
      secret:
        " If you stare at your reflection and say I'M LOVIN IT three times, your pupils will temporarily become golden arches",
    },
  },
  floating_images: {
    images: [
      { src: "/float-1.webp", alt: "FLOATING MCDC SQUARE 1" },
      { src: "/float-2.webp", alt: "FLOATING MCDC SQUARE 2" },
      { src: "/float-3.avif", alt: "FLOATING MCDC SQUARE 3" },
      { src: "/float-4.avif", alt: "FLOATING MCDC SQUARE 4" },
      { src: "/float-5.webp", alt: "FLOATING MCDC SQUARE 5" },
      { src: "/float-6.webp", alt: "FLOATING MCDC SQUARE 6" },
      { src: "/float-7.avif", alt: "FLOATING MCDC SQUARE 7" },
    ],
  },
  bottomTaskBarSection: {
    title: "🖕🏼 $FYH COIN",
  },
  footer: {
    title: "Join the $FYH",
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
