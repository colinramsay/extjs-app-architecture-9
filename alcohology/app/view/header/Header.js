Ext.define('Alcohology.view.header.Header', {
    extend: 'Ext.panel.Header',
    requires: ['Alcohology.view.header.MiniCart'],
    xtype: 'app-header',
    cls: 'app-header',
    layout: 'hbox',
    title: 'Alcohology',
    viewModel: {},
    items: [{ xtype: 'minicart', bind: { data: { count: '{cartCount}' } } }]
});