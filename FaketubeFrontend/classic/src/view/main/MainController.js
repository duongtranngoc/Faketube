Ext.define('FaketubeFrontend.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange',
        ':node/:id(/:args)?': 'onRouteDataChange'
    },

    control: {
        '#navigationTreeList': {
            selectionchange: 'onNavigationTreeSelectionChange',
        },
    },

    init: function () {
        console.log('aa');
        if ('' == window.location.hash) {
            this.redirectTo('home');
        } else {
            var hash = window.location.hash.substring(1);
            console.log(' hash view: ', hash);
            var listhast = hash.split('/');
            if (listhast.length > 1)
                this.onRouteDataChange(listhast[0], listhast[1], listhast[2]);
            else
                this.onRouteChange(hash);
        }
    },

    onRouteChange: function (id) {
        console.log('onRouteChange:' + id);
        this.setCurrentView(id);
    },

    setCurrentView: function (hashTag) {
        console.log('hashTag: ', hashTag);

        hashTag = (hashTag || '').toLowerCase();
        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore();

            console.log('refs: ', refs);
            console.log('navigationList: ', navigationList);
            console.log('store: ', store);

        var node = store.findNode('routeId', hashTag) || store.findNode('viewType', hashTag);
        var view = (node && node.get('viewType')) || 'page404';

        //Hien thong tin menu dc chon
        if (node) {
            var viewmodel = this.getViewModel();
            if (null != node.data.parent_name)
                viewmodel.set('selected_menu', node.data.parent_name + ' -> ' + node.data.text);
            else
                viewmodel.set('selected_menu', node.data.text);
        }

        if (mainLayout.getActiveItem()) {
            mainLayout.getActiveItem().destroy();
        }

        newView = Ext.create({
            xtype: view,
            routeId: hashTag,  // for existingItem search later
            hideMode: 'offsets'
        });

        //console.log(newView);
        mainLayout.setActiveItem(mainCard.add(newView));

        me.fireEvent('urlBack', node);
        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));
        var hash = window.location.hash.substring(1);

        if (to.substring(2) == hash.split('/')[0]) {
            this.redirectTo(hash);
        }
        else {
            this.redirectTo(to);
        }
    },

    onToggleNavigationSize: function (button) {
        var self = this;
        var references = self.getReferences();
        var viewModel = self.getViewModel();

        var menuStore = references.navigationTreeList;
        var sidebar = references.mainSidebar;
        var center = references.mainCenter;
        var collapsing = !menuStore.getMicro();
        var newWidth = collapsing ? sizeconstant.MAIN.WIDTH_MENU_CLOSED
            : sizeconstant.MAIN.WIDTH_MENU_OPENED;

        if (collapsing) {
            menuStore.setUi('navigation-collap');
            viewModel.set('sidebarCls', 'sidebar-close');
            button.setIconCls('x-fa fa-list')
        } else {
            menuStore.setUi('navigation');
            viewModel.set('sidebarCls', 'sidebar-open');
            button.setIconCls('x-fa fa-chevron-left')
        }
        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();
            menuStore.setWidth(newWidth);
            menuStore.setMicro(collapsing);
            Ext.resumeLayouts()
        } else {
            menuStore.setMicro(collapsing);
            menuStore.setWidth(newWidth);
            sidebar.setWidth(newWidth);
            center.setWidth(center.lastBox.width + sizeconstant.MAIN.WIDTH_MENU_OPENED - newWidth);
            sidebar.updateLayout();
            center.updateLayout();
        }

        this.getViewModel().set('sidebarWidth', newWidth);
    }
});