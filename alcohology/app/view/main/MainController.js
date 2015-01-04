// app/view/main/MainController.js
Ext.define('Alcohology.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        component: {
            'component[cls="mini-cart"]': { click: 'onCartClick' },
            'component[cls="account-indicator"]': { click: 'onAccountClick' }
        },

        controller: { '*': { loginrequired: 'onLoginRequired' } }
    },

    routes: {
        'account': 'onAccountRoute',
        'cart': 'onCartRoute'
    },

    onLoginRequired: function() {
        Ext.toast('Please login or register.');
        this.redirectTo('account', true);
    },

    onCartClick: function() {
        this.redirectTo('cart', true);
    },

    onAccountClick: function() {
        this.redirectTo('account', true);
    },

    onAccountRoute: function() {
        this.lookupReference('accountWindow').show();
    },

    onCartRoute: function() {
        this.lookupReference('cartWindow').show();
    }
});
