// app/view/account/Register.js
Ext.define('Alcohology.view.account.Register', {
    extend: 'Ext.FormPanel',
    xtype: 'register',
    defaultType: 'textfield',
    items: [
        {
            xtype: 'fieldset', margin: 10, padding: 10,
            defaults: { xtype: 'textfield', width: '100%' },
            items: [
                { fieldLabel: 'Email', bind: '{email}', vtype: 'email' },
                { fieldLabel: 'Password', inputType: 'password' }
            ]
        },
        {
            xtype: 'fieldset', margin: 10, padding: 10,
            defaults: { xtype: 'textfield', width: '100%' },
            items: [
                { fieldLabel: 'House Number' },
                { fieldLabel: 'Street' },
                { fieldLabel: 'Town' },
                { fieldLabel: 'County' },
                { fieldLabel: 'Postcode' }
            ]
        }
    ]
});