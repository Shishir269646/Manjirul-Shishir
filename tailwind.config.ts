import type { Config } from "tailwindcss";


const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: "#93C5FD",
                    DEFAULT: "#3B82F6",
                    dark: "#1E40AF",
                },
                primary: "#3498db",
                customGreen: "#00C897",
                customYellow: "#FFD365",
            },
        },
    },
    plugins: [],
};
export default config;
