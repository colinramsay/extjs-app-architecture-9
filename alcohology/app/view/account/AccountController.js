// app/view/account/AccountController.js
Ext.define('Alcohology.view.account.AccountController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.account',
    listen: {
        component: {
            '#close': { click: 'onAccountClose' },
            '#loginRegister': { click: 'onLoginRegister' }
        }
    },

    onAccountClose: function(btn) {
        this.getView().hide();
    },

    onLoginRegister: function() {
        this.getViewModel().set('currentUser', {
            email: this.getViewModel().get('email')
        });

        this.getView().hide();
    }
});