Ext.define('FaketubeFrontend.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'text', type: 'string' },
        {
            name: 'iconCls',
            type: 'string',
            convert: function (val) {
                return val + ' iconMenu';
            },
        },
        { name: 'routeId', type: 'string' },
        { name: 'viewType', type: 'string' },
        { name: 'leaf' },
        { name: 'index', type: 'number' }
    ],

    sorters: [
        {
            property: 'index',
            direction: 'ASC',
        },
    ],

    root: {
        expanded: true,
        children: [
            {
                text: 'Trang chủ',
                iconCls: 'x-fa fa-home',
                viewType: 'HomeView',
                routeId: 'home', // routeId defaults to viewType
                leaf: true,
                index: 1
            },
            {
                text: 'Channel',
                iconCls: 'x-fa fa-cogs',
                viewType: 'ChannelView',
                routeId: 'danh-sach-channels',
                leaf: false,
                index: 2,

                children: [
                    {
                        text: 'Thêm channel',
                        iconCls: 'x-fa fa-plus',
                        viewType: 'ChannelDetailsView',
                        routeId: 'them-channel',
                        leaf: true
                    }
                ]
            }
        ]
    }
});