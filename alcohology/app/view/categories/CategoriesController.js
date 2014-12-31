// app/view/categories/CategoriesController.js
Ext.define('Alcohology.view.categories.CategoriesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categories',
    listen: {
        component: {
            'categories': { 'itemclick': 'onItemClick' }
        }
    },

    onItemClick: function(view, record) {
        this.redirectTo('category/' + record.getId());
    }
});