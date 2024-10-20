import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'custom-bg': "url('https://romsimply.weebly.com/uploads/1/2/6/7/126748910/720431603_orig.png')"
    }
    
    },
  },
  plugins: [],
};
export default config;
