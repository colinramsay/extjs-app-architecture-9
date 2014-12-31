// app/view/header/Header.js
Ext.define('Alcohology.view.header.Header', {
    extend: 'Ext.panel.Header',
    requires: [
        'Alcohology.view.header.MiniCart',
        'Alcohology.view.header.AccountIndicator'
    ],
    xtype: 'app-header',
    cls: 'app-header',
    layout: 'hbox',
    title: 'alcohology.',
    items: [
        { xtype: 'account-indicator', width: 80, bind: '{currentUser}' },
        { xtype: 'minicart', width: 80, bind: { data: { count: '{cartCount}' } }}
    ]
});