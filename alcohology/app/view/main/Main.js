// app/view/main/Main.js
Ext.define('Alcohology.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    controller: 'main',
    viewModel: 'main',
    layout: 'border',

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