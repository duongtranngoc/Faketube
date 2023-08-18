Ext.define('FaketubeFrontend.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'FaketubeFrontend.view.main.MainController',
        'FaketubeFrontend.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'main-view',
    layout: 'border',

    items: [
        {
            xtype: 'container',
            region: 'north',

            cls: 'main-header',
            height: sizeconstant.MAIN.HEIGHT_HEADER,
            layout: 'hbox',

            items: [
                {
                    flex: 1
                },
                {
                    xtype: 'container',
                    cls: 'main-header-content',
                    height: '100%',
                    html: 'trang quản trị',
                },
                {
                    flex: 1
                }
            ]
        },
        {
            xtype: 'container',
            region: 'west',
            reference: 'mainSidebar',

            cls: 'main-sidebar',
            layout: 'vbox',
            bind: {
                width: '{sidebarWidth}'
            },

            scrollable: 'y',

            items: [
                {
                    xtype: 'treelist',
                    itemId: 'navigationTreeList',
                    reference: 'navigationTreeList',
                    store: 'NavigationTree',

                    ui: 'navigation',
                    cls: 'main-sidebar-content',
                    width: sizeconstant.MAIN.WIDTH_MENU_OPENED,
                    flex: 1,

                    expanderFirst: false,
                    expanderOnly: false
                }
            ]
        },
        {
            xtype: 'container',
            region: 'center',

            cls: 'main-center',
            reference: 'mainCenter',
            layout: 'vbox',

            items: [
                {
                    xtype: 'container',
                    itemId: 'headerBar',

                    cls: 'main-center-header',
                    height: 40,
                    width: '100%',
                    layout: 'hbox',

                    items: [
                        {
                            xtype: 'button',
                            id: 'main-navigation-btn',
                            reference: 'buttonToggleSidebar',

                            cls: 'icon-collapse',
                            iconCls: 'x-fa fa-chevron-left',
                            margin: 10,

                            handler: 'onToggleNavigationSize'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'center',
                    reference: 'mainCardPanel',

                    cls: 'main-center-content',
                    width: '100%',
                    margin: 10,
                    flex: 1,
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    },

                    scrollable: true
                }
            ]
        }
    ]
});