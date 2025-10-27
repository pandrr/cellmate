import path from "path"

const sharedConfig = {
    // watch: true,
    entry: './index.js',
    mode: 'development',
    devtool: 'source-map',
    experiments: {
        outputModule: true
    }
};
const moduleConfig = {
    ...sharedConfig,
    output: {
        libraryTarget: 'module',
        filename: 'cellmate.js',
        path: path.resolve("./", 'dist')
    }
};

const cjsConfig = {
    ...sharedConfig,
    output: {
        filename: 'cellmate.cjs',
        path: path.resolve("./", 'dist'),
        iife: true,
        library: {
            type: 'umd',
        },
    }
}
export default [moduleConfig, cjsConfig]
