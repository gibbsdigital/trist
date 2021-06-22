// rollup.config.js
import {terser} from 'rollup-plugin-terser';
const sourcemap = process.env.DEV ? true : false;

export default {
    input: 'src/assets/js/main.js',
    output: {
        file: 'dist/assets/js/main.js',
        format: 'iife',
        sourcemap,
        plugins: [terser()],
    },
    watch: {
        clearScreen: false
    },
};
