Ext.define('Alcohology.view.product.List', {
    extend: 'Ext.DataView',
    requires: [
        'Alcohology.view.product.ListModel'
    ],
    xtype: 'product-list',
    bodyCls: 'product-list-body',
    tpl: '<tpl for="."><div class="product">{name}</div></tpl>',
    itemSelector: 'product',
    bind: '{currentProducts}',
    viewModel: 'product-list'
});