Ext.define('FaketubeFrontend.view.factory.details.ChannelDetailsView', {
    extend: 'Ext.panel.Panel',
    xtype: 'ChannelDetailsView',

    controller: 'ChannelDetailsViewController',
    viewModel: {
        type: 'ChannelDetailsViewModel'
    },

    layout: {
        type: 'vbox',
        align: 'center',
    },

    defaults: {
        xtype: 'textfield',
        width: '50%',
        allowBlank: false
    },

    items: [
        {
            fieldLabel: 'Tên Channel',
            bind: {
                value: '{ChannelName}'
            }
        },
        {
            fieldLabel: 'Mô tả',
            bind: {
                value: '{Description}'
            }
        },
        {
            fieldLabel: 'Lượt theo dõi',
            bind: {
                value: '{SubscribersCount}'
            }
        },
        {
            fieldLabel: 'Đường dẫn',
            bind: {
                value: '{URL}'
            }
        }
    ],

    dockedItems: [
        {
            dock: 'bottom',
            items: [
                {
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                    },

                    items: [
                        {
                            xtype: 'button',
                            text: 'Thêm',
                            width: 100,
                            handler: 'onAddChannel'
                        },
                        {
                            xtype: 'button',
                            text: 'Quay lại',
                            width: 100,
                            bind: {
                                hidden: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
});