Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.Panel',
    requires: [
        'Alcohology.view.main.MainController',
        'Alcohology.view.main.MainModel',
        'Alcohology.view.categories.Categories',
        'Alcohology.view.product.List',
        'Alcohology.view.header.Header',
        'Alcohology.view.account.Account',
        'Alcohology.view.cart.Cart'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    session: true,
    header: { xtype: 'app-header' },
    items: [
        { xtype: 'categories', width: 200, region: 'west' },
        { xtype: 'product-list', region: 'center' }
    ],

    initComponent: function() {
        this.callParent(arguments);

        this.add(Ext.create('Alcohology.view.cart.Cart', {
            reference: 'cartWindow'
        }));

        this.add(Ext.create('Alcohology.view.account.Account', {
            reference: 'accountWindow'
        }));
    }
});
