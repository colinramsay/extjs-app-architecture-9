Ext.define('Alcohology.view.product.ProductModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product',
    requires: [
        'Alcohology.model.Category'
    ],
    data: {
        currentProduct: {
            name: 'Gordons Special Reserve',
            price: '£19.99',
            previousPrice: '£23.99',
            description: 'Mauris dignissim est id eleifend varius. Maecenas iaculis et lacus quis viverra. Duis iaculis ante vel neque maximus, sed rhoncus dolor pellentesque. Praesent lobortis risus vitae lorem laoreet, eget blandit diam ultrices. Proin aliquam varius eleifend.',
            features: [
                'Quality', 'Traditional', 'Tasty'
            ]
        }
    },
    links: {
        currentCategory: {
            type: 'Alcohology.model.Category',
            id: 5
        }
    },
    formulas: {
        currentProducts: function(get) {
            return get('currentCategory.products');
        }
    }
});