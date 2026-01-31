/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#10b981', // emerald-500
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#64748b', // slate-500
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#f59e0b', // amber-500
                    foreground: '#ffffff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
