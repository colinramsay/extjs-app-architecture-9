// app/view/account/Login.js
Ext.define('Alcohology.view.account.Login', {
    extend: 'Ext.FormPanel',
    xtype: 'login',
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
            xtype: 'container',
            padding: 10,
            html: 'If you\'ve already got an Alcohology account,\
             please enter your login details above. If not, please\
             complete the registration form and join us!'
        }
    ]
});