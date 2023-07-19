import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'docs/script.ts',
    output: {
        file: 'docs/bundle.js',
    },
    plugins: [
        nodeResolve({ browser: true }),
        terser(),
        typescript(),
    ],
};