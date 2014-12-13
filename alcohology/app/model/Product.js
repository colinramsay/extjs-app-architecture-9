Ext.define('Alcohology.model.Product', {
    extend: 'Alcohology.model.BaseModel',
    requires: ['Alcohology.model.Category'],
    fields: [
        { name: 'id', type: 'integer'},
        { name: 'name', type: 'string' },
        {
             name: 'categoryId',
             reference: {
                type: 'Category',
                inverse: 'products'
             }
         }
    ]
});