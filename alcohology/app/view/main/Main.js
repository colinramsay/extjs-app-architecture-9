Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Alcohology.view.main.MainController',
        'Alcohology.view.main.MainModel',
        'Alcohology.view.categories.Categories',
        'Alcohology.view.header.Header'
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [
        { xtype: 'header', region: 'north' },
        { xtype: 'categories', width: 200, region: 'west' },
        { html: 'hi', region: 'center' }
    ]
});
