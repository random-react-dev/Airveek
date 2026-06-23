import localFont from "next/font/local";

export const hostGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/HostGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HostGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HostGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HostGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HostGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HostGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/HostGrotesk-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});
