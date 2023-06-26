/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                cardShadowLight: " 0 2px 8px 4px rgba(140,140,140,0.5) ",
                cardShadowDark: " 0 2px 8px 4px rgba(0,0,0,0.5) ",
            },
        },
    },
    plugins: [],
};
