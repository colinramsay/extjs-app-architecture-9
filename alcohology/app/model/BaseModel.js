Ext.define('Alcohology.model.BaseModel', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'Alcohology.model',
        proxy: {
            type: 'rest',
            url: 'data/{entityName:uncapitalize}.json'
        }
    }
});