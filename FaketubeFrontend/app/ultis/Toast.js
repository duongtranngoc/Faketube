Ext.define('FaketubeFrontend.utils.Toast', {
    singleton: true,
    alternateClassName: [
        'toast'
    ],

    toastSuccess: function (message) {
        Ext.toast({
            title: 'Thành công',
            html: message,
            iconCls: 'x-fa fa-check-circle',
            cls: 'toast-success',
            align: 'br',
            minWidth: 300
        });
    },

    toastInfo: function (message) {
        Ext.toast({
            title: 'Thông tin',
            html: message,
            iconCls: 'x-fa fa-info-circle',
            cls: 'toast-info',
            align: 'br',
            minWidth: 300
        });
    },

    toastError: function (message) {
        Ext.toast({
            title: 'Lỗi',
            html: message,
            iconCls: 'x-fa fa-times-circle',
            cls: 'toast-error',
            align: 'br',
            minWidth: 300
        });
    },

    toastWarning: function (message) {
        Ext.toast({
            title: 'Cảnh báo',
            html: message,
            iconCls: 'x-fa fa-exclamation-circle',
            cls: 'toast-warning',
            align: 'br',
            width: 300
        })
    },
});