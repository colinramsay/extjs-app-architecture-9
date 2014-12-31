// app/model/Order.js
Ext.define('Alcohology.model.Order', {
    extend: 'Alcohology.model.BaseModel',
    fields: [
        { name: 'date', type: 'date' },
        { name: 'items', type: 'auto' }
    ]
});