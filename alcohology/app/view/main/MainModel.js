Ext.define('Alcohology.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires: ['Alcohology.store.Cart'],

    stores: {
        cart: {
            type: 'cart'
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