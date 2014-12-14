Ext.define('Alcohology.store.Cart', {
    extend: 'Ext.data.Store',
    model: 'Alcohology.model.CartItem',
    alias: 'store.cart',

    addProduct: function(product) {
        // find a product with a matching ID
        var item = this.findRecord('productId', product.getId())

        if(item) {
            item.set('quantity', item.get('quantity') + 1);
            item.commit();
        } else {
            item = this.add({
                productName: product.get('name'),
                productId: product.getId(),
                quantity: 1
            });
        }

        return item;
    }
});