import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'monospace'],
                serif: ['var(--font-newsreader-serif)', 'serif'],
            },
        },
    },
    plugins: [typography],
};

export default config;