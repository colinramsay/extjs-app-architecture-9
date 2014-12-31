// app/view/categories/Categories.js
Ext.define('Alcohology.view.categories.Categories', {
    extend: 'Ext.grid.Panel',
    xtype: 'categories',
    controller: 'categories',
    viewModel: 'categories',
    bodyCls: 'categories-body',
    requires: [
        'Alcohology.view.categories.CategoriesModel',
        'Alcohology.view.categories.CategoriesController'
    ],
    bind: {
        store: '{categories}'
    },
    hideHeaders: true,
    viewConfig: {
        trackOver: false
    },
    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 }
    ]
});