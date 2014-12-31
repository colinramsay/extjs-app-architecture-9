// app/model/CartItem.js
Ext.define('Alcohology.model.CartItem', {
    extend: 'Alcohology.model.BaseModel',
    fields: [
        { name: 'productId' },
        { name: 'productName' },
        { name: 'price' },
        { name: 'quantity' }
    ]
});