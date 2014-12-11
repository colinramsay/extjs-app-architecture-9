Ext.define('Alcohology.view.categories.CategoriesModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['Alcohology.store.Categories'],
    alias: 'viewmodel.categories',
    stores: {
        categories: {
            type: 'categories',
            autoLoad: true
        }
    }
});