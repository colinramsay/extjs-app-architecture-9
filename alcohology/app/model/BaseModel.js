// app/model/BaseModel.js
Ext.define('Alcohology.model.BaseModel', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'Alcohology.model',
        urlPrefix: 'http://localhost:3000',
        proxy: {
            type: 'rest',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    }
});