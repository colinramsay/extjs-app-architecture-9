Ext.define('Alcohology.view.header.MiniCart', {
    extend: 'Alcohology.ux.ClickContainer',
    xtype: 'minicart',
    cls: 'mini-cart',
    tpl: new Ext.XTemplate('<span style="font-family:FontAwesome;">&#xf07a;</span> {count} items')
});