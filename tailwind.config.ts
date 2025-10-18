// tailwind.config.js
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                violet: {
                    50: '#F5F3FF',
                    100: '#EDE9FE',
                    200: '#DDD6FE',
                    300: '#C4B5FD',
                    400: '#A78BFA',
                    500: '#8B5CF6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                    800: '#5B21B6',
                    900: '#4C1D95',
                },
                indigo: colors.indigo,
                blue: colors.blue,
                sky: colors.sky,
                cyan: colors.cyan,
                teal: {
                    50: "#E0F7FA",
                    100: "#B2EBF2",
                    200: "#80DEEA",
                    300: "#4DD0E1",
                    400: "#26C6DA",
                    500: "#00BCD4",
                    600: "#00ACC1",
                    700: "#0097A7",
                    800: "#00838F",
                    900: "#006064",
                    950: "#00363A"
                },
            },
        },
    },
    plugins: [],
}
