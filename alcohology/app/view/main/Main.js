Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.Panel',
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
    header: { xtype: 'app-header' },
    items: [
        { xtype: 'categories', width: 200, region: 'west' },
        { xtype: 'product-list', region: 'center' }
    ]
});
