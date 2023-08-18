Ext.define('FaketubeFrontend.view.factory.ChannelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ChannelViewModel',

    requires: [
        'FaketubeFrontend.store.ChannelStore',
    ],

    stores: {
        channelStore: {
            type: 'ChannelStore'
        }
    }
});