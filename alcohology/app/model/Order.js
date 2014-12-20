Ext.define('Alcohology.model.Order', {
    extend: 'Alcohology.model.BaseModel',
    fields: [
        { name: 'date', type: 'date', dateFormat: 'm F Y' },
        { name: 'items', type: 'auto' }
    ]
});