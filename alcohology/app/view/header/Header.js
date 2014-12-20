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
        { xtype: 'account-indicator', bind: '{currentUser}' },
        { xtype: 'minicart', bind: { data: { count: '{cartCount}' } }}
    ]
});