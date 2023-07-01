// comment in js
module.exports = {
    content: ['./src/**/*.{html,js}'],
    content: ['*.{html,js}'],
    // exporting content
    theme: {
        extend: {
            screens: {
                huge: '2000px',
            },
        },
    },
    plugins: [],

}

// Now command for NPX

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch