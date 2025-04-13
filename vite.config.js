import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        vituum(),
        posthtml({root: './src'}),
        tailwindcss()
    ]
}
