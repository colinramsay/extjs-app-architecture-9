Ext.define('Alcohology.view.product.List', {
    extend: 'Ext.DataView',
    controller: 'product',
    requires: [
        'Alcohology.view.product.ProductModel',
        'Alcohology.view.product.ProductController'
    ],
    emptyText: 'No Products Found.',
    xtype: 'product-list',
    cls: 'product-list',
    tpl: '<tpl for="."><div class="product">{name}</div></tpl>',
    itemSelector: '.product',
    bind: '{currentProducts}',
    viewModel: 'product'
});