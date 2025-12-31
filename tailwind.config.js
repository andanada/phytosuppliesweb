/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                phyto: {
                    50: "#f3faf6",
                    100: "#def4e7",
                    200: "#b9e7cf",
                    300: "#86d3ae",
                    400: "#4db986",
                    500: "#2f9f6d",
                    600: "#228058",
                    700: "#1c6647",
                    800: "#1a513a",
                    900: "#154331",
                },
            },
        },
    },
    plugins: [],
};
