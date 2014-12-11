Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Alcohology.view.main.MainController',
        'Alcohology.view.main.MainModel'
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: []
});
