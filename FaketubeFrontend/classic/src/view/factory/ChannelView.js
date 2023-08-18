Ext.define('FaketubeFrontend.view.factory.ChannelView', {
    extend: 'Ext.grid.Panel',
    xtype: 'ChannelView',

    controller: 'ChannelViewController',
    viewModel: {
        type: 'ChannelViewModel'
    },

    tbar: [
        '->',
        {
            xtype: 'button',
            text: 'Thêm Channel',
            iconCls: 'x-fa fa-plus',
            handler: 'onAddChannel'
        },
    ],

    bbar: [
        {
            xtype: 'component',
            flex: 1,
        },
        {
            xtype: 'pagingtoolbar',
            bind: {
                store: '{channelStore}'
            },
        },
        {
            xtype: 'component',
            flex: 1
        }
    ],

    bind: {
        store: '{channelStore}'
    },

    columns: [
        {
            text: 'STT',
            xtype: 'rownumberer',
            width: 60,
            align: 'center'
        },
        {
            text: 'Tên channel',
            dataIndex: 'ChannelName',
            flex: 1
        },
        {
            text: 'Mô tả',
            dataIndex: 'Description',
            flex: 1
        },
        {
            text: 'Lượt theo dõi',
            dataIndex: 'SubscribersCount',
            flex: 1
        },
        {
            text: 'Đường dẫn',
            dataIndex: 'URL',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            text: 'Thao tác',
            align: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-eye iconOrange',
                    tooltip: 'Xem chi tiết',
                    handler: 'onViewDetails'
                },
                {
                    iconCls: 'x-fa fa-edit iconGreen',
                    tooltip: 'Sửa channel',
                    handler: 'onEdit'
                },
                {
                    iconCls: 'x-fa fa-trash iconRed',
                    tooltip: 'Xóa channel',
                    handler: 'onDelete'
                }
            ]
        }
    ]
});