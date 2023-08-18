Ext.define('FaketubeFrontend.view.factory.details.ChannelDetailsViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ChannelDetailsViewController',

    onAddChannel: function() {
        var self= this;
        var viewModel= self.getViewModel();
        var params= {
            ChannelName: viewModel.get('ChannelName'),
            Description: viewModel.get('Description'),
            SubscribersCount: viewModel.get('SubscribersCount'),
            URL: viewModel.get('URL')
        };

        Ext.Ajax.request({
            url: config.getAppBaseUrl() + 'channels/add',
            method: 'POST',
            jsonData: params, // Truyền dữ liệu từ frontend
            success: function(response) {
                Ext.toast('Mặt hàng đã được thêm thành công.', 'Thông báo');
                // Thực hiện cập nhật dữ liệu trong store nếu cần
                // ...
                self.redirectTo('danh-sach-channels')
            },
            failure: function(response) {
                Ext.toast('Có lỗi xảy ra khi thêm mặt hàng.', 'Lỗi');
            }
        });
    }
});