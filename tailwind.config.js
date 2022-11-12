/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: "'Open Sans', sans-serif",
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                doctosPortal: {
                    primary: '#0FCFEC',
                    secondary: '#19deae',
                    accent: '#67CBA0',
                    neutral: '#3a4256',
                    'base-100': '#FFFFFF',
                },
            },
        ],
    },
};
