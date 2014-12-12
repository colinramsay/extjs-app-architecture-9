Ext.define('Alcohology.model.Product', {
    extend: 'Alcohology.model.BaseModel',
    requires: ['Alcohology.model.Category'],
    fields: [
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