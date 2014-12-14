Ext.define('Alcohology.view.product.ProductModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product',
    requires: [
        'Alcohology.model.Category',
        'Alcohology.store.Products'
    ],
    links: {
        currentCategory: {
            type: 'Alcohology.model.Category',
            id: 1
        }
    },
    stores: {
        products: {
            type: 'products',
            remoteFilter: true,
            filters: [{
                property: 'categoryId',
                value: '{currentCategory.id}'
            }]
        }
    }
});