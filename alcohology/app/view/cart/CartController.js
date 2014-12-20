Ext.define('Alcohology.view.cart.CartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cart',
    listen: {
        component: {
            '#closeCart': {
                'click': function(btn) {
                    btn.up('window').hide();
                }
            }
        }
    }
});