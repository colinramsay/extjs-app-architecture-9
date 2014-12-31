// app/store/PastOrders.js
Ext.define('Alcohology.store.PastOrders', {
    extend: 'Ext.data.Store',
    model: 'Alcohology.model.Order',
    alias: 'store.pastorders'
});
