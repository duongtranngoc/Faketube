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

    onViewDetails: function () {

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