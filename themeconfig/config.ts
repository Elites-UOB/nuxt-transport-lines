import { UnocssNuxtOptions } from "@unocss/nuxt";
import palettes from "./palettes.json";

export const config: UnocssNuxtOptions = {
  autoImport: true,
  uno: true,
  icons: true,
  attributify: true,
  typography: true,

  webFonts: {
    provider: "google",
    fonts: {
      sans: ["Cairo:200,300,400,500,600,700,800,900"],
    },
  },

  preflights: [
    {
      getCSS: ({ theme }) => `
          * {
            font-family: ${theme["fontFamily"]["sans"]};
            margin: 0;
          }
        `,
    },
  ],

  theme: {
    colors: palettes,
  },
};
