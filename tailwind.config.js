export default{
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'preuksa_regular': ["Preuksa_regular", "regular"],
                'preuksa_semibold': ["Preuksa_semibold", "semibold"],
            },

            colors: {
                customGreen: "#4AFE95",
                customBlue: "#21AD9D",

            }
        },
    },
    plugins: [],
}