/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                cardShadow: " 0 2px 8px 4px rgba(140,140,140,0.5) ",
            },
        },
    },
    plugins: [],
};
