// app/view/cart/CartController.js
Ext.define('Alcohology.view.cart.CartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cart',
    listen: {
        component: {
            '#closeCart': { click: 'onCartClose' },
            '#orderNow': { click: 'onOrderNow' }
        }
    },

    onCartClose: function() {
        this.getView().hide();
    },

    onOrderNow: function() {
        var vm = this.getViewModel();

        if(!vm.get('currentUser')) {
            this.fireEvent('loginrequired');
        } else {
            var order = vm.get('cart').toOrder();

            vm.get('cart').removeAll();
            vm.get('orders').add(order);

            Ext.toast('Order Accepted!');

            this.getView().hide();
        }
    }
});