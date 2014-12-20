Ext.define('Alcohology.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires: ['Alcohology.store.Cart', 'Alcohology.model.Order'],

    stores: {
        cart: {
            type: 'cart'
        },
        orders: {
            model: 'Alcohology.model.Order',
            data: [
                { date: '2014-10-18', items: [{ name: 'Leffe 750ml', quantity: 6 }] }
            ]
        }
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