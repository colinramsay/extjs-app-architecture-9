Ext.define('Alcohology.view.product.ProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.product',
    listen: {
        component: {
            '#productListView': { 'itemclick': 'onProductClick' },
            '#close': { 'click': 'onProductClose' },
            '#addToCart': { 'click': 'onAddToCart' },
            'combo': { 'select': 'onSortSelect' }
        }
    },

    routes : {
        'product/:id': 'onProductRoute',
        'category/:id': 'onCategoryRoute'
    },

    onSortSelect: function(combo, records) {
        if(records.length > 0) {
            
        }
    },

    onCategoryRoute: function(id) {
        this.getViewModel().linkTo('currentCategory', { reference: 'Alcohology.model.Category', id: id });
        if(this.productWindow) {
            this.productWindow.close();
        }
    },

    onProductRoute: function(id) {
        this.getViewModel().linkTo('currentProduct', { reference: 'Alcohology.model.Product', id: id });
        this.productWindow = Ext.create('Alcohology.view.product.Detail');

        this.productWindow.show();
    },


    onProductClick: function(view, record, el) {    
        this.redirectTo('product/' + record.getId());
    },


    onProductClose: function() {
        this.redirectTo('category/' + this.getViewModel().get('currentCategory').getId());
    },


    onAddToCart: function() {
        var product = this.getViewModel().get('currentProduct');

        this.getViewModel().get('cart').addProduct(product);

        Ext.toast('Product Added');
    }
});