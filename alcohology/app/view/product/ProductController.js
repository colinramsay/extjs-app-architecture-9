// app/view/product/ProductController.js
Ext.define('Alcohology.view.product.ProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.product',
    listen: {
        component: {
            '#productListView': { 'itemclick': 'onProductClick' },
            '#close': { 'click': 'onProductClose' },
            '#addToCart': { 'click': 'onAddToCart' },
            'combo': { 'select': 'onSortSelect' }
        },
        store: {
            'products': {
                'beforeload': function() {
                    this.lookupReference('list').mask('Loading...');
                },
                'load': function() {
                    this.lookupReference('list').mask(false);
                }
            }
        }
    },


    routes : {
        'product/:id': 'onProductRoute',
        'category/:id': 'onCategoryRoute'
    },


    onSortSelect: function(combo, records) {
        if(records.length > 0) {
            var prop = records[0].get('property'),
                dir = records[0].get('direction');

            this.getViewModel().set('sortProperty', prop);
            this.getViewModel().set('sortDirection', dir);
        }
    },

    onCategoryRoute: function(id) {
        var cfg = { reference: 'Alcohology.model.Category', id: id };
        this.getViewModel().linkTo('currentCategory', cfg);
        this.lookupReference('productWindow').hide();
    },

    onProductRoute: function(id) {
        var cfg = { reference: 'Alcohology.model.Product', id: id };
        this.getViewModel().linkTo('currentProduct',  cfg);
        this.lookupReference('productWindow').show();
    },


    onProductClick: function(view, record, el) {    
        this.redirectTo('product/' + record.getId());
    },


    onProductClose: function() {
        var id = this.getViewModel().get('currentCategory').getId();
        this.redirectTo('category/' + id);
    },


    onAddToCart: function() {
        var product = this.getViewModel().get('currentProduct');

        this.getViewModel().get('cart').addProduct(product);

        Ext.toast('Product Added');
    }
});