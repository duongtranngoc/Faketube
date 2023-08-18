Ext.define('FaketubeFrontend.store.ChannelStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ChannelStore',

    fields: [
        {
            name: 'ChannelId'
        },
        {
            name: 'ChannelName'
        },
        {
            name: 'Description'
        },
        {
            name: 'SubscribersCount'
        },
        {
            name: 'URL'
        }
    ],

    loadStore: function() {
        this.setProxy({
            type: 'ajax',
            url: config.getAppBaseUrl() + 'channels',
            actionMethods: {
                create: 'POST',
                read: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
            
            noCache: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            reader: {
                type: 'json'
            },
        });

        this.load({
            callback: function(records, operation, success) {
                // Kiểm tra "success" để xem liệu dữ liệu đã được tải thành công hay không
                if (success) {
                    // Dữ liệu đã được tải thành công, có thể cập nhật grid tại đây
                } else {
                    Ext.toast('Có lỗi xảy ra khi tải dữ liệu.', 'Lỗi');
                }
            }
        });
    }
});