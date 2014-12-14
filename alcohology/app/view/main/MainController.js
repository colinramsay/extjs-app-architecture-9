Ext.define('Alcohology.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        component: {
            'component[cls="mini-cart"]': {
                click: function() {
                    this.redirectTo('cart');
                    this.lookupReference('cartWindow').show();
                }
            }
        }
    },


    routes: {
        'cart': function() {
            var win = this.lookupReference('cartWindow');
            if(win.isHidden()) {
                win.show();
            }
        }
    }
});
