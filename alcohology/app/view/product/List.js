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
    autoScroll: true,
    tbar: [
        {
            xtype: 'combo',
            store: Ext.create('Ext.data.Store', {
                fields: ['text', 'field', 'direction'],
                data : [
                    { text: 'Date Added', property: 'id', direction: 'DESC' },
                    { text: 'Name A-Z', property: 'name', direction: 'ASC' },
                    { text: 'Name Z-A', property: 'name', direction: 'DESC' },
                    { text: 'Price ASC', property: 'price', direction: 'ASC' }
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
            xtype: 'dataview', itemId: 'productListView', emptyText: '<span class="empty">No Products Found.</span>',
            tpl: '<tpl for="."><div class="product"><h2>{name}</h2><img src="/resources/product-images/{imagePath}-thumb.jpg" /><p>&pound;{price}</p></div></tpl>',
            itemSelector: '.product', bind: '{products}'
        }
    ]
});