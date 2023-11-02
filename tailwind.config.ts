import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          check: "url('/icons/check4.svg')",
      },
      colors:{
        'black-300': '#131316',
        'gray-400': '#56616B',
        'jade':'#E3FCF2',
        'light-red': '#F9E3E0',
        'gray50': '#EFF1F6',
        'jade400': '#0EA163',
        'yellow400': '#A77A07'
      },
      fontFamily:{
        'degular-bold': 'degular-bold',
        'degular': 'degular'
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
