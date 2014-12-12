Ext.define('Alcohology.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Alcohology',

    stores: ['Alcohology.model.Product', 'Alcohology.model.Category'],
    
    launch: function () {
    
    }
});
