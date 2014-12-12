Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Alcohology.view.main.MainController',
        'Alcohology.view.main.MainModel',
        'Alcohology.view.categories.Categories',
        'Alcohology.view.product.List',
        'Alcohology.view.header.Header'
    ],
    session: true,
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [
        { xtype: 'app-header', region: 'north' },
        { xtype: 'categories', width: 200, region: 'west' },
        { xtype: 'product-list', region: 'center' }
    ]
});
