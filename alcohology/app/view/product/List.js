Ext.define('Alcohology.view.product.List', {
    extend: 'Ext.Panel',
    controller: 'product',
    requires: [
        'Alcohology.view.product.ProductModel',
        'Alcohology.view.product.ProductController'
    ],
    xtype: 'product-list',
    cls: 'product-list',
    viewModel: 'product',
    tbar: [
        {
            xtype: 'combo',
            store: Ext.create('Ext.data.Store', {
                fields: ['text', 'field', 'direction'],
                data : [
                    { text: 'Date Added' },
                    { text: 'Price ASC', field: 'price', direction: 'ASC' }
                ]
            }),
            displayField: 'text',
            queryMode: 'local',
            fieldLabel: 'Sort By',
            emptyText: 'None',
            editable: false
        }
    ],
    items: [
        { 
            xtype: 'dataview', itemId: 'productListView', emptyText: 'No Products Found.',
            tpl: '<tpl for="."><div class="product">{name}</div></tpl>',
            itemSelector: '.product', bind: '{products}'
        }
    ]
});