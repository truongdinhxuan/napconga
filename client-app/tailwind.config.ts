import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        time: ['"Times New Roman"', 'serif'],
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}',
  ],
  plugins: [],
}
export default config
