Ext.define('Alcohology.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        component: {
            'component[cls="mini-cart"]': {
                click: function() {
                    this.redirectTo('cart', true);
                }
            },


            'component[cls="account-indicator"]': {
                click: function() {
                    this.redirectTo('account', true);
                }
            }
        },

        controller: {
            '*': {
                loginrequired: function() {
                    Ext.toast('Please login or register.');
                    this.redirectTo('account', true);
                }
            }
        }
    },


    routes: {
        'account': function() {
            this.lookupReference('accountWindow').show();
        },

        'cart': function() {
            this.lookupReference('cartWindow').show();
        }
    }
});
