// app/store/Cart.js
Ext.define('Alcohology.store.Cart', {
    extend: 'Ext.data.Store',
    model: 'Alcohology.model.CartItem',
    alias: 'store.cart',

    addProduct: function(product) {
        // find a product with a matching ID
        var item = this.findRecord('productId', product.getId());

        if(item) {
            item.set('quantity', item.get('quantity') + 1);
            item.commit();
        } else {
            item = this.add({
                productName: product.get('name'),
                price: product.get('price'),
                productId: product.getId(),
                quantity: 1
            });
        }

        return item;
    },

    toOrder: function() {
        var items = [], total = 0;

        this.each(function(item) {
            items.push({
                name: item.get('productName'),
                quantity: item.get('quantity')
            });

            total += item.get('price') * item.get('quantity');
        });

        return Ext.create('Alcohology.model.Order', {
            date: new Date(), items: items, total: total
        });
    }
});