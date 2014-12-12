Ext.define('Alcohology.view.product.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product-list',
    requires: [
        'Alcohology.model.Category'
    ],
    links: {
        category: {
            type: 'Alcohology.model.Category',
            id: 5
        }
    },
    formulas: {
        currentProducts: function(get) {
            return get('category.products');
        }
    }
});