Ext.define('FaketubeFrontend.config.Config', {
    alternateClassName: [
        'config'
    ],
    singleton: true,

    config: {
        appBaseUrl: 'http://localhost:8000/api/'
    },

    constructor: function (config) {
        this.initConfig(config);
        return this
    }
});
