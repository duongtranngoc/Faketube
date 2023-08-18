Ext.define('FaketubeFrontend.view.factory.ChannelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ChannelViewController',

    init: function () {
        var viewModel = this.getViewModel();
        var channelStore = viewModel.getStore('channelStore');
        channelStore.loadStore()
    },

    onAddChannel: function () {
        this.redirectTo('them-channel');
    },

    onViewDetails: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var channelName= record.get('ChannelName');
        var description= record.get('Description');
        var subscribersCount= record.get('SubscribersCount');
        var url= record.get('URL');

        var viewDetails = Ext.create('Ext.window.Window', {
            closable: true,
            resizable: true,
            modal: true,
            border: false,
            title: 'Xem chi tiết',
            width: 500,
            centered: true,
            bodyStyle: 'background-color: transparent',
            padding: '0 20px',
            layout: {
                type: 'fit'
            },
            items: [
                {
                    xtype: 'form',
                    layout: 'vbox',
                    width: '100%',
                    defaults: {
                        xtype: 'textfield',
                        width: '100%',
                        allowBlank: false
                    },

                    items: [
                        {
                            fieldLabel: 'Tên Channel',
                            value: channelName
                        },
                        {
                            fieldLabel: 'Mô tả',
                            value: description
                        },
                        {
                            fieldLabel: 'Lượt theo dõi',
                            value: subscribersCount
                        },
                        {
                            fieldLabel: 'Đường dẫn',
                            value: url
                        }
                    ]
                }
            ]
        });
        viewDetails.show();
    },

    onEdit: function () {

    },

    onDelete: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var channelName= record.get('ChannelName');

        Ext.Msg.confirm('Xác nhận', 'Bạn có chắc chắn muốn xóa channel ' + channelName + '?', function (buttonId) {
            if (buttonId === 'yes') {
                this.deleteChannel(record.get('ChannelId')); // Gọi hàm xóa channel với Id tương ứng
            }
        }, this);
    },

    deleteChannel: function (channelId) {
        var self= this;
        var viewModel = self.getViewModel();
        var channelStore = viewModel.getStore('channelStore');

        Ext.Ajax.request({
            url: config.getAppBaseUrl() + 'channels/delete', // Đặt URL xóa channel
            method: 'POST',
            jsonData: { ChannelId: channelId }, // Truyền dữ liệu lên server
            success: function (response) {
                Ext.toast('Channel đã được xóa thành công.', 'Thông báo');
                channelStore.loadStore();
            },
            failure: function (response) {
                console.log('Error response:', response.responseText);
                Ext.toast('Có lỗi xảy ra khi xóa channel.', 'Lỗi');
            }
        });
    }
});