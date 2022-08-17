/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte}"],
    theme: {
        container: {
            center: true
        },
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '960px',
                    },
                    '@screen lg': {
                        maxWidth: '1180px',
                    },
                    '@screen xl': {
                        maxWidth: '1436px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1636px',
                    },
                }
            })
        }
    ]
}
