Ext.define('Alcohology.view.product.ProductModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product',
    requires: [
        'Alcohology.model.Category',
        'Alcohology.model.Product'
    ],
    links: {
        currentCategory: {
            type: 'Alcohology.model.Category',
            id: 1
        }
    },
    formulas: {
        currentProducts: function(get) {
            return get('currentCategory.products');
        }
    }
});