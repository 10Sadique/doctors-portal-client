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
                mytheme: {
                    primary: '#0fcefc',
                    secondary: '#19deae',
                    accent: '#67CBA0',
                    neutral: '#3a4256',
                    'base-100': '#FFFFFF',
                    info: '#3ABFF8',
                    success: '#36D399',
                    warning: '#FBBD23',
                    error: '#F87272',
                },
            },
            'light',
        ],
    },
};
