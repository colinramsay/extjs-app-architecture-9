// app/view/product/List.js
Ext.define('Alcohology.view.product.List', {
    extend: 'Ext.Panel',
    controller: 'product',
    requires: [
        'Alcohology.view.product.ProductModel',
        'Alcohology.view.product.ProductController',
        'Alcohology.view.product.Detail'
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
            xtype: 'dataview', itemId: 'productListView',
            reference: 'list',
            emptyText: '<span class="empty">No Products Found.</span>',
            itemSelector: '.product', bind: '{products}',
            tpl: '<tpl for="."><div class="product"><h2>{name}</h2><img src="/resources/product-images/{imagePath}-thumb.jpg" /><p>&pound;{price}</p></div></tpl>'
        }
    ],


    constructor: function() {
        this.callParent(arguments);
        
        this.addDocked({
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            store: this.getViewModel().get('products'),
            displayInfo: true
        });

        this.add(Ext.create('Alcohology.view.product.Detail', {
            reference: 'productWindow'
        }));
    }
});