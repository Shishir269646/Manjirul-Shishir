// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Add your custom colors here
                "AquaDeep": "#014B43",
                "Barberry": "#d5d52b",
            },
        },
    },
    plugins: [],
}
export default config