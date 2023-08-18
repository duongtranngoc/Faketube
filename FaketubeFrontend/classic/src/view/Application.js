/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FaketubeFrontend.Application', {
    extend: 'Ext.app.Application',

    name: 'FaketubeFrontend',

    requires: [
        'FaketubeFrontend.view.*',
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'NavigationTree'
    ],

    launch: function () {
        Ext.create('FaketubeFrontend.view.main.Main', {
            fullscreen: true
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
