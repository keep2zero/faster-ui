const inlineSvg = require('rollup-plugin-inline-svg');

export default {
    // ssr:true
    base: '',
    plugins: [
        inlineSvg({

        })
    ],
    assetsDir: "assets",
    emitManifest: false,
    emitAssets: true,
    // assetsInlineLimit: 34096,
   
    rollupOutputOptions: {
        entryFileNames: '[name].js',
        assetFileNames: `[name].[ext]`,
        // chunkFileNames: `[name].js`,
      }
       
}