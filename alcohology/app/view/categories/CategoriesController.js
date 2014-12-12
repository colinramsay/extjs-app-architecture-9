Ext.define('Alcohology.view.categories.CategoriesController', {
    extend: 'Ext.app.ViewController',

    listen: {
        component: {
            'categories': { 'itemclick': 'onItemClick' }
        }
    },


    onItemClick: function() {
        console.log(arguments);
    }
});