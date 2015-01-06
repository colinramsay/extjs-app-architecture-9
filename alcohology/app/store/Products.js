// app/store/Products.js
Ext.define('Alcohology.store.Products', {
    extend: 'Ext.data.Store',
    model: 'Alcohology.model.Product',
    alias: 'store.products',
    pageSize: 5,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/product',
        reader: {
            rootProperty: 'data'
        }
    }
});