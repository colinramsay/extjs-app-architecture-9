// app/view/main/MainModel.js
Ext.define('Alcohology.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires: ['Alcohology.store.Cart', 'Alcohology.store.PastOrders'],

    stores: {
        cart: { type: 'cart' },
        orders: { type: 'pastorders'}
    },

    data: {
        cartCount: 0
    },

    constructor: function() {
        var me = this;

        me.callParent(arguments);

        me.get('cart').on('datachanged', function(store) {
            me.set('cartCount', store.count());
        });
    }
});