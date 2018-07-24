module.exports = {
    // baseUrl: '/baseUrl/',
    assetsDir: 'static',
    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW'
    }
}